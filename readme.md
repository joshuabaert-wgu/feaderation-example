## Federation Example
This project is an example of how we at WGU could use module federation to separate our deploys

### Setup instructions
1. clone repo
2. run `npm i`
3. run `npm start`
4. navigate to http://localhost:4000

This actually builds and sets up 3 separate angular projects. One of which uses pieces of the other projects that are hosted at separate urls.
This will allow us to deploy our Micro front-ends separately from each other.

Another unintended but welcome effect of this is that it allow for easy orchestration of micro front-ends with ngp-web-ui and for local development. 
IE removing the need to yarn link or try to yalc link the pages to ensure it works with ngp-web-ui.

There is a great module federation blog chain located [here](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)
