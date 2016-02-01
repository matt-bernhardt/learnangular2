import {Component} from 'angular2/core';
import {Repo} from './repo';
import {RepoList} from './repo_list';
import {RepoForm} from './repo_form';
import {RepoSummary} from './repo_summary';
@Component({
  selector: 'repo-app',
  template: `
    <h2>GitHub Repository Summarizer</h2>
    <p>Use this form to add or remove GitHub repositories from the display.</p>
    <p><span>Displaying {{remaining}} of {{repos.length}} identified repositories<br></span>
    [ <a (click)="archive()">remove inactive</a> ]</p>
    <repo-summary></repo-summary>
    <repo-list [repos]="repos"></repo-list>
    <repo-form (newTask)="addTask($event)"></repo-form>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [RepoSummary, RepoList, RepoForm]
})
export class RepoApp {
  repos: Repo[] = [
      {text:'matt-bernhardt/trapp', status:'good', active:true, issues:0},
      {text:'mitlibraries/unbox', status:'good', active:true, issues:0}
  ];
  get remaining() {
    return this.repos.reduce((count: number, repo: Repo) => count + +repo.active, 0);
  }
  archive(): void {
    var oldRepos = this.repos;
    this.repos = [];
    oldRepos.forEach((repo: Repo) => {
      if (!repo.done) this.repos.push(repo);
    });
  }
  addTask(task: Repo) {
    this.repos.push(task);
  }
}
