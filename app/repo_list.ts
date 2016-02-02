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
    }
    th {
      border-bottom: 1px solid black;
      padding: 5px;
    }
    td {
      padding: 5px;
    }
    `
  ],
  template: `
    <table>
      <thead>
        <tr>
          <th scope="col">Active</th>
          <th scope="col">Issues</th>
          <th scope="col">Repository</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#repo of repos" class="active-{{repo.active}} status-{{repo.status}}">
          <td><input type="checkbox" [(ngModel)]="repo.active"></td>
          <td>{{repo.issues}}</td>
          <td><a href="http://github.com/{{repo.text}}">{{repo.text}}</a></td>
        </tr>
      </tbody>
    </table>
    `
})
export class RepoList {
  @Input() repos: Repo[];
}
