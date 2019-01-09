import { Component } from '@angular/core';
import {ActionTypes, WorkflowAction} from './workflow.actions';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-bootstrap-persistence';
  workflow$: Observable<any>;

  constructor(private store: Store<any>) {
    this.workflow$ = store.pipe(select('workflow'));

    // watch for changes
    this.workflow$.subscribe(workflow => {
      console.log(workflow);
    });
  }

  public beforeChange(event) {
    this.store.dispatch(new WorkflowAction(ActionTypes.WorkflowAction, {event: event}, true));
  }
}
