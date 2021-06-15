import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistReducer from '../features/artists/artistsSlice';

export const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
