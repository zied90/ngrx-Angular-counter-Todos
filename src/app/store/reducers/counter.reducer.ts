import {CustomAction} from '../store';
import {DECREMENT, INCREMENT} from '../actions/counter.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface Counter {
  n: number;
}

let initState = {
  n: 0
};

export function counterReducer(state = initState, action: CustomAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        n: state.n + action.payload
      };
    case DECREMENT:
      return {
        n: state.n - action.payload
      };
    default:
      return state;
  }
}

let counterFS = createFeatureSelector<Counter>('counter');
export let nSelector = createSelector(counterFS, state => state.n);
