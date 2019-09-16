# block8-fetch-social-urls
Fetch all the relevant social urls from a single url

Description:
1. I have used Google Custom Search Engine API with the help of which I can get all the relevant URLs.
2. Also typescript is being used for checking compile time errors.
3. We can execute the functionality via Node CLI as well.
4. It also has support for pagination

Requirements:
1. We need to create our custom google search engine which will search only in some specific URLs (the list which we will provide).
2. We need API key as well as Custom Search Engine ID. Both of these are mandatory to execute the code.

Before proceeding further, please install the modules mentioned in package.json using 'npm install' command.

Usage:
1. Use 'npm run start <search_string>' command on the terminal.
2. It will compile the typescript code first and then execute the 'fetchUrls' function with the <search_string> we passed as parameter.
