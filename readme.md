## Federation Example
This project is an example of how we at WGU could use module federation to separate our deploys

### Setup instructions
1. clone repo
2. run `npm i`
3. run `npm start`
4. navigate to http://localhost:4000

This actually builds and sets up 4 separate angular projects. One of which uses pieces of the other projects that are hosted at separate urls.
This will allow us to deploy our Micro front-ends separately from each other.

Another unintended but welcome effect of this is that it allow for easy orchestration of micro front-ends with ngp-web-ui and for local development. 
IE removing the need to yarn link or try to yalc link the pages to ensure it works with ngp-web-ui.

There is a great module federation blog chain located [here](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)


### Steps for setting up 'Shell Application'

1. Ensure you have angular 12+
2. run `ng add @angular-architects/module-federation --port {ProjectPort}` you can also add `--project {ProjectName}` if it is not the default

This will have you set up as far as what needs to be done to the project.

### Steps for setting up Micro Front Ends 

1. Ensure you have angular 12+
2. run `ng add @angular-architects/module-federation --port {ProjectPort}` you can also add `--project {ProjectName}` if it is not the default
3. Navigate to the now created `webpack.config.js` in the project
4. Uncomment and edit the remote section that should look something like 
```JS
  // For remotes (please adjust)
  name: "learner",
  filename: "learnerEntry.js",
  exposes: {
    './LearnerModule': './projects/learner-ui/src/app/learner.module.ts',
    './LearnerComponent': './projects/learner-ui/src/app/learner.component.ts' 
    // You don't need both this is an example of both exporting a lazy module and exporting a component 
  }
```
5. Ensure the correct module and other "exposed" points are correct.

### Ways to bring Micro Front Ends into the Shell Application

There are two ways to bring code from a Micro Front End. 

#### Lazy Loading: 

1. You will need to ensure you have the MFE setup to be lazy loaded by having a `RouterModule.forChild()` being used by the MFE module
2. Import the external module in the router setup 
```ts
import { loadRemoteModule } from '@angular-architects/module-federation';

RouterModule.forRoot([
  {
    path: 'learner',
    loadChildren: () => loadRemoteModule({
      remoteEntry: `{learnerUrl}/learnerEntry.js`,
      remoteName: 'learner',
      exposedModule: './LearnerModule',
    }).then(m => m.LearnerModule),
  },
]
```

#### Using a Component

It is possible to use a single component and not it just needs to be exposed. Refer to the "exposes" section of the webpack.config.js.

Unfortunately it is not as simple, so I will refer to the component-proxy.component.ts in the shell project [here](./shell/src/app/component-proxy.component.ts)
