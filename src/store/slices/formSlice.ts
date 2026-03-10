// /src/store/slices/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
}

const initialState: FormState = {
  isSubmitting: false,
  submitError: null,
  submitSuccess: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitFormStart: (state) => {
      state.isSubmitting = true;
      state.submitError = null;
      state.submitSuccess = false;
    },
    submitFormSuccess: (state) => {
      state.isSubmitting = false;
      state.submitSuccess = true;
    },
    submitFormError: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false;
      state.submitError = action.payload;
    },
    resetFormState: (state) => {
      state.isSubmitting = false;
      state.submitError = null;
      state.submitSuccess = false;
    },
  },
});

export const { 
  submitFormStart, 
  submitFormSuccess, 
  submitFormError, 
  resetFormState 
} = formSlice.actions;

export default formSlice.reducer;