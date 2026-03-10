// /src/utils/types.ts
import { store } from '../store/store';

// Утилитарные типы
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типы для формы
export interface IFormData {
  name: string;
  phone: string;
  contactMethod: 'Phone' | 'Telegram' | 'WhatsApp';
  comment?: string;
}

// Типы для модального окна
export interface IModalState {
  isOpen: boolean;
  modalType: 'request' | 'example' | null;
}

// Типы для тарифов
export interface IRate {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  category: 'solutions' | 'tools' | 'support';
}

// Типы для кейсов
export interface ICaseStudy {
  id: string;
  title: string;
  profit: string;
  description: string;
  color: string;
  images: string[];
}
