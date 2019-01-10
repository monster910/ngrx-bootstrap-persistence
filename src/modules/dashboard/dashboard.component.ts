import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActionTypes, WorkflowAction} from '../../state-mgmt/workflow.actions';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private store: Store<any>) {
  }

  public beforeChange(event) {
    this.store.dispatch(new WorkflowAction(ActionTypes.WorkflowAction, {event: event}, true));
  }

}
