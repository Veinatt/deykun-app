/**
 * Redux slice для управления UI состоянием
 * Управляет состоянием меню, скролла, активных табов и аккордеонов
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeTab: string;
  activeAccordion: string | null;
}

const initialState: UIState = {
  isMenuOpen: false,
  isScrolled: false,
  activeTab: "",
  activeAccordion: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    setActiveAccordion: (state, action: PayloadAction<string | null>) => {
      state.activeAccordion = action.payload;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  setScrolled,
  setActiveTab,
  setActiveAccordion,
} = uiSlice.actions;

export default uiSlice.reducer;
