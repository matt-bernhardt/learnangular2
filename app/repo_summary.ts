import {Component, Output, EventEmitter} from 'angular2/core';
import {Repo} from './repo';
@Component({
  selector: 'repo-summary',
  template: `
    <p>This is the {{active}} summary.</p>`
})
export class RepoSummary {

  get active() {
    return "foo";
  }
  
}