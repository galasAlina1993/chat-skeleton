import { Action } from '@ngrx/store';

export const actionTypes = {
  SHOW_SPINNER: '[Core.Layout] Show Spinner',
  HIDE_SPINNER: '[Core.Layout] Hide Spinner',
};

export class ShowSpinnerAction implements Action {
  readonly type = actionTypes.SHOW_SPINNER;
}

export class HideSpinnerAction implements Action {
  readonly type = actionTypes.HIDE_SPINNER;
}

export type Actions =
  | ShowSpinnerAction
  | HideSpinnerAction;
