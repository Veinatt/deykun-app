/**
 * Типы для контента, который будет приходить из Directus API
 * Все поля соответствуют структуре коллекций Directus
 */

// Базовый тип для всех сущностей Directus
export interface DirectusEntity {
  id: string;
  date_created?: string;
  date_updated?: string;
  status?: 'published' | 'draft' | 'archived';
}

// Типы для главной страницы (Hero Section)
export interface HeroContent extends DirectusEntity {
  title: string;
  subtitle: string;
  description: string;
  button_text: string;
  sale_mark?: string;
  sale_date?: string;
  background_image?: string;
  points: HeroPoint[];
}

export interface HeroPoint {
  id: string;
  icon?: string;
  text: string;
  order: number;
}

// Типы для секции "Для чего это нужно?"
export interface PurposeSection extends DirectusEntity {
  title: string;
  highlighted_text: string;
  items: PurposeItem[];
}

export interface PurposeItem {
  id: string;
  title: string;
  image_small: string;
  image_large: string;
  order: number;
}

// Типы для секции "Почему именно мы?"
export interface WhyUsSection extends DirectusEntity {
  title: string;
  highlighted_text: string;
  items: WhyUsItem[];
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

// Типы для секции "Исключены ситуации"
export interface ExcludedSection extends DirectusEntity {
  title: string;
  highlighted_text: string;
  items: ExcludedItem[];
}

export interface ExcludedItem {
  id: string;
  text: string;
  emoji_icon: string;
  order: number;
}

// Типы для тарифов
export interface Rate extends DirectusEntity {
  name: string;
  slug: string;
  description: string;
  price: number;
  old_price?: number;
  features: RateFeature[];
  category: 'solutions' | 'tools' | 'support';
  popular?: boolean;
  order: number;
}

export interface RateFeature {
  id: string;
  text: string;
  included: boolean;
  order: number;
}

// Типы для кейсов (Portfolio)
export interface CaseStudy extends DirectusEntity {
  title: string;
  slug: string;
  profit: string;
  description: string;
  color: string;
  images: CaseImage[];
  order: number;
}

export interface CaseImage {
  id: string;
  image: string;
  order: number;
}

// Типы для отзывов
export interface Review extends DirectusEntity {
  author_name: string;
  position?: string;
  company?: string;
  avatar?: string;
  service?: string;
  text: string;
  rating?: number;
  order: number;
}

// Типы для FAQ
export interface FAQItem extends DirectusEntity {
  question: string;
  answer: string[];
  order: number;
}

// Типы для партнеров
export interface Partner extends DirectusEntity {
  name: string;
  logo: string;
  link?: string;
  order: number;
}

// Типы для контактов
export interface ContactInfo extends DirectusEntity {
  phone: string;
  email: string;
  telegram?: string;
  whatsapp?: string;
  address?: string;
  working_hours?: string;
}

// Типы для формы
export interface FormSubmission {
  name: string;
  phone: string;
  contact_method: 'Phone' | 'Telegram' | 'WhatsApp';
  form_type: string;
  comment?: string;
}

// Типы для метаданных страницы
export interface PageMeta extends DirectusEntity {
  page: string;
  title: string;
  description: string;
  keywords?: string;
  og_image?: string;
}

