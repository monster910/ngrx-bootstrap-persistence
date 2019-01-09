import {ActionTypes, WorkflowAction} from './workflow.actions';

export let initialWorkflow = {
  current: null
};

export function workflowReducer(workflow = initialWorkflow, action: WorkflowAction) {
  switch (action.type) {
    case ActionTypes.WorkflowAction:
      console.log(action.event);

      // interrogate action to determine next action
      // bla.. bla.. bla.. workflow determination code

      // return new state. this is a new object to trigger subscribers on the workflow object
      return { current: 'next' };

    default:
      return workflow;
  }
}
