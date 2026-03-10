/**
 * Центральный файл экспорта всех типов
 */

// Типы для контента (Directus)
export * from './content.types';

// Импортируем store для типов
import { store } from '../store/store';

// Типы для Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типы для формы
export interface IFormData {
  name: string;
  phone: string;
  contactMethod: 'Phone' | 'Telegram' | 'WhatsApp';
  comment?: string;
  formType?: string;
}

// Типы для модального окна
export interface IModalState {
  isOpen: boolean;
  modalType: 'request' | 'example' | null;
  formType?: string;
}

// Типы для UI состояния
export interface UIState {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeTab: string;
  activeAccordion: string | null;
}

