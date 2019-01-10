import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActionTypes, WorkflowAction} from '../../state-mgmt/workflow.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  workflow$: Observable<any>;

  constructor(private store: Store<any>) {
    this.workflow$ = store.pipe(select('workflow'));
  }

  public beforeChange(event) {
    this.store.dispatch(new WorkflowAction(ActionTypes.WorkflowAction, {event: event}, true));
  }

}
