import { Action } from '@ngrx/store';

export enum ActionTypes {
  WorkflowAction = 'WorkflowAction'
}

export class WorkflowAction implements Action {

  constructor(public type: ActionTypes, public event: any, public persist?: boolean) {
    this.type = type;
    this.event = event;
    this.persist = persist;
  }

}
