import {bootstrap} from 'angular2/platform/browser';
import {RepoApp}   from './repo_app';
bootstrap(RepoApp)
  .catch(err => console.error(err));
