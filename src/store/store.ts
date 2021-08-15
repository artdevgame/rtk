import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';

import { gameEventStatusApi } from './services/gameEventStatus';

const rootReducer = combineReducers({
  [gameEventStatusApi.reducerPath]: gameEventStatusApi.reducer,
});

const middlewares: Middleware[] = [gameEventStatusApi.middleware];

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(...middlewares),
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type Store = typeof store;
