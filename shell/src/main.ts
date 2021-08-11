import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteModule({
    remoteEntry: 'http://localhost:3100/catEntry.js',
    remoteName: 'cat',
    exposedModule: './cat-module',
  })
]).catch((err) => {console.error('Error loading entry', err) })
  .then(() => {
    import('./bootstrap')
      .catch(err => console.error(err));
  })

