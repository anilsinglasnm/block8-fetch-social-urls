import MOCK_RESP from './mock';
import fetch from 'node-fetch';

const API_KEY = ''; // Google Custom Search API Key
const CSE_ID = '';// Google Custom Search Engine Id

interface ISearchResult {
    link: string,
}

interface IApiResponse {
    items: Array<ISearchResult>,
}

export function fetchAllSocialUrls(inputUrl: string, pageNum: string) {
    const relevant_urls: Array<string> = [];
    const splittedUrl: Array<string> = inputUrl.split('/');
   
    // Either the last or the second last item will be the username
    const username: string = splittedUrl[splittedUrl.length - 1] ? splittedUrl[splittedUrl.length - 1] : splittedUrl[splittedUrl.length - 2];

    const searchStartIndex = (10 * (parseInt(pageNum) - 1)) + 1;
    
    const SEARCH_URL: string = `https://www.googleapis.com/customsearch/v1?fields=items(link)&key${API_KEY}=&cx=${CSE_ID}&q=${username}&num=10&start=${searchStartIndex}`;

    fetch(SEARCH_URL).then((resp: any) => {
        // MOCK RESPONSE ADDED        
        // return resp.json()
        if(resp.status !== 200) {
            throw resp;
        }
        return resp.json()
    })
    // MOCK RESPONSE ADDED
    // .then(() => MOCK_RESP)
    .then((resp: IApiResponse) => {
        
        if(resp.items && resp.items.length > 0) {
            resp.items.forEach((item: ISearchResult) => {
                if(item.link && item.link.includes(username)) {
                    relevant_urls.push(item.link);
                }
            });
        }

        console.log('Searched Results: ', relevant_urls);

    }).catch((err: any) => err.text().then((err:any) => console.log('Error: ', err)));
};

export function fetchUrls() {
    const url:string = process.argv[1];
    const pageNum: string = process.argv[2] || '1';
    if(url) {
        fetchAllSocialUrls(url, pageNum);
    }
}




