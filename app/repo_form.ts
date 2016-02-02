import {Component, Output, EventEmitter} from 'angular2/core';
import {Repo} from './repo';

@Component({
  selector: 'repo-form',
  template: `
    <form (ngSubmit)="addRepo()">
      <input type="text" [(ngModel)]="task" size="30"
             placeholder="new user/repo">
      <input class="btn-primary" type="submit" value="add">
    </form>`
})
export class RepoForm {
  @Output() newTask = new EventEmitter<Repo>();
  task: string = '';
  addRepo() {
    if (this.task) {
      this.newTask.next({
        text: this.task,
        issues: Math.random()*10,
        status: 'active',
        active: true
      });
    }
    this.task = '';
  }
}
