import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ActionTypes, WorkflowAction} from '../../state-mgmt/workflow.actions';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
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
