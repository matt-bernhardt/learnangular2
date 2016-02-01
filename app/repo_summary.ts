import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Repo} from './repo';
@Component({
  selector: 'repo-summary',
  template: `
    <p>This is the {{active}} {{totalIssues}} summary.</p>`
})
export class RepoSummary {
  @Input() repos: Repo[];

  get active() {
    return "foo";
  }

  get totalIssues() {
  	return "bar";
  }
  
}