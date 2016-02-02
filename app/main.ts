import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RepoApp}   from './repo_app';

bootstrap(RepoApp, [HTTP_PROVIDERS])
  .catch(err => console.error(err));
