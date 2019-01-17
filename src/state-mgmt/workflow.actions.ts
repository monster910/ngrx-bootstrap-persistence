import { Action } from '@ngrx/store';

export enum ActionTypes {
  WorkflowAction = 'WorkflowAction'
}

export class WorkflowAction implements Action {

  constructor(public type: ActionTypes, public data: any, public persist?: boolean) {
    this.type = type;
    this.data = data;
    this.persist = persist;
  }

}
