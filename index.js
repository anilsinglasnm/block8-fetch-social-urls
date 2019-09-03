(function() {
    const API_KEY = ''; // Google Custom Search API Key
    const CSE_ID = '';// Google Custom Search Engine Id

    const fetchAllSocialUrls = (inputUrl) => {
        const splittedUrl = inputUrl.split('/');
        // Either the last or the second last item will be the username
        const username = splittedUrl[splittedUrl.length - 1] ? splittedUrl[splittedUrl.length - 1] : splittedUrl[splittedUrl.length - 2];
        
        const SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key${API_KEY}=&cx=${CSE_ID}&q=${username}`;

        fetch(SEARCH_URL).then(resp => resp.json()).then(resp => {
            const relevant_urls = [];
            if(resp.items && resp.items.length > 0) {
                resp.items.forEach(item => {
                    if(item.link.includes(username)) {
                        relevant_urls.push(item.link);
                    }
                });
            }

            console.log('Other Relevant Social platforms: ', relevant_urls);
        });
    };

    fetchAllSocialUrls('https://www.instagram.com/fashiongrunge/');
})();