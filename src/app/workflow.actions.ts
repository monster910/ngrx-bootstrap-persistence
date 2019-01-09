import { Action } from '@ngrx/store';

export enum ActionTypes {
  WorkflowAction = 'WorkflowAction',
}

export class WorkflowAction implements Action {
  readonly type = ActionTypes.WorkflowAction;

  constructor(public event: any) {
    this.event = event;
  }

}
