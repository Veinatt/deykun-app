/// <reference types="vite/client" />

// Декларации для импорта изображений
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.svg' {  
  // Для использования как URL
  const content: string;
  export default content;
}

// Декларации для импорта SCSS модулей
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Декларации для импорта CSS модулей
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Декларации для импорта шрифтов
declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}

declare module '*.eot' {
  const content: string;
  export default content;
}

// Декларации для импорта других файлов
declare module '*.mp4' {
  const content: string;
  export default content;
}

declare module '*.webm' {
  const content: string;
  export default content;
}

// Глобальные переменные окружения (опционально)
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  // Добавьте другие переменные по мере необходимости
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}