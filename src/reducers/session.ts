import { createReducer } from '@reduxjs/toolkit';
import { demoAction } from '../actions/session';

interface SessionState {
  testValue: number;
}

export const initialState = {
  testValue: 0,
} as SessionState;

const session = createReducer(initialState, (builder) => {
  builder.addCase(demoAction, (state, action) => {
    state.testValue += action.payload;
  });
});

export default session;
