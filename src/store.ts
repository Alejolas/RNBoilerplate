import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export type RootState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
});
