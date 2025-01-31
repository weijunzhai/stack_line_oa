import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer, {getDataAsync} from '../features/DataTable/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

store.dispatch(getDataAsync())

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
