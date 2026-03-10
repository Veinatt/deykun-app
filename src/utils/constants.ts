// src/utils/constants.ts
// Константы приложения

export const APP_CONFIG = {
  name: 'Deykun Marketing',
  description: 'Маркетинг и даже больше',
  url: 'https://deykun-marketing.ru',
  email: 'deykun.studio@gmail.com',
  phone: '+7 (995) 449-95-54',
  telegram: 'https://t.me/qqmaik',
  whatsapp: 'https://wa.me/+79524280135',
};

// Навигация
export const NAVIGATION = {
  home: '/',
  success: '/success',
  error: '/error',
};

// Социальные сети
export const SOCIAL_LINKS = {
  whatsapp: {
    url: 'https://wa.me/+79524280135',
    label: 'WhatsApp',
    icon: 'whatsapp',
  },
  telegram: {
    url: 'https://t.me/qqmaik',
    label: 'Telegram',
    icon: 'telegram',
  },
  email: {
    url: 'mailto:deykun.studio@gmail.com',
    label: 'Email',
    icon: 'email',
  },
};

// Категории услуг
export const SERVICE_CATEGORIES = {
  solutions: 'Решения',
  tools: 'Инструменты',
  support: 'Сопровождение',
} as const;

// Цвета для секций
export const SECTION_COLORS = {
  primary: '#3360ff',
  secondary: '#22c332',
  accent: '#f84868',
  dark: '#1a1a1a',
  light: '#f6f6fd',
} as const;

// Анимации
export const ANIMATION_DELAYS = {
  fast: 0.1,
  normal: 0.3,
  slow: 0.5,
} as const;

// Брейкпоинты
export const BREAKPOINTS = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;