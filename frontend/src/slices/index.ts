import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch