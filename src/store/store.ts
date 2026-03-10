/**
 * Redux Store Configuration
 * Централизованное хранилище состояния приложения
 */

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import formReducer from './slices/formSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    form: formReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;