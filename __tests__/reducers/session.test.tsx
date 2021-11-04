import session, { initialState } from '../../src/reducers/session';
import { demoAction } from '../../src/actions/session';

it('Test demo action', () => {
  expect(session(initialState, demoAction(1)).testValue).toBe(1);
});
