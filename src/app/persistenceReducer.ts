import { ActionReducer } from '@ngrx/store';
import {ActionTypes, WorkflowAction} from './workflow.actions';

export function persistenceReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action: WorkflowAction) {
    if (action.type === ActionTypes.WorkflowAction && action.persist) {
      // persist the action
      console.log('persisting state', state);
    }

    return reducer(state, action);
  };
}
