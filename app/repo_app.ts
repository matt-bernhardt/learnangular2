import {Component} from 'angular2/core';
import {Repo} from './repo';
import {RepoList} from './repo_list';
import {RepoForm} from './repo_form';

@Component({
  selector: 'repo-app',
  viewProviders: [],
  template: `
    <h2>GitHub Repository Summarizer</h2>
    <p>Use this form to add or remove GitHub repositories from the display.</p>
    <p><span>Displaying {{remaining}} of {{repos.length}} identified repositories<br></span>
    [ <a (click)="archive()">remove inactive</a> ]</p>
    <repo-list [repos]="repos"></repo-list>
    <repo-form (newTask)="addRepo($event)"></repo-form>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [RepoList, RepoForm]
})
export class RepoApp {

  constructor() {
    console.log('This is the constructor');
  }

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
      if (repo.active) this.repos.push(repo);
    });
  }

  lookupRepo(task) {
    console.log(task);
    console.log('Looking up repo _' + task.text + '_');
    url = 'https://api.github.com/repos/' + task.text;
    console.log(url);   
    // fake the lookup here
    task.issues = 4;
  }

  addRepo(task: Repo) {
    this.lookupRepo(task);
    this.repos.push(task);
  }

}
