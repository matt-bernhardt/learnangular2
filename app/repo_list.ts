import {Component, Input} from 'angular2/core';
import {Repo} from './repo';
@Component({
  selector: 'repo-list',
  styles: [`
    .active-true {
      font-weight: bold;
    }
    .status-active {
      color: green;
      font-weight: bold;
    }
    .status-off {
      text-decoration: line-through;
      color: grey;
      font-weight: normal;
    }
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
    <ul class="unstyled">
      <li *ngFor="#repo of repos">
        <input type="checkbox" [(ngModel)]="repo.active">
        <span class="active-{{repo.active}} status-{{repo.status}} done-{{repo.done}}">{{repo.issues}} - {{repo.text}}</span>
      </li>
    </ul>`
})
export class RepoList {
  @Input() repos: Repo[];
}
