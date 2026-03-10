// /src/store/slices/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типы для данных модалки
interface ModalData {
  source: string;
  formType: string;
}

interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  modalData: ModalData | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null,
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ type: string; data: ModalData }>) => {
      state.isOpen = true;
      state.modalType = action.payload.type;
      state.modalData = action.payload.data;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;