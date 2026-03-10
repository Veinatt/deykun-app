/**
 * API Service для работы с Directus
 * В будущем здесь будет интеграция с Directus API
 * Сейчас используются моковые данные
 */

import axios from 'axios';
import type {
  HeroContent,
  PurposeSection,
  WhyUsSection,
  ExcludedSection,
  Rate,
  CaseStudy,
  Review,
  FAQItem,
  Partner,
  ContactInfo,
} from '../types/content.types';

// Базовый URL для Directus API (будет настроен позже)
const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055';

// Создаем экземпляр axios с базовой конфигурацией
const apiClient = axios.create({
  baseURL: `${DIRECTUS_URL}/items`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Получить контент для Hero секции
 */
export const getHeroContent = async (): Promise<HeroContent> => {
  // TODO: Заменить на реальный запрос к Directus
  // const response = await apiClient.get('/hero_content/1');
  // return response.data;
  
  // Моковые данные
  return {
    id: '1',
    title: 'Маркетинг - который даст результат',
    subtitle: 'Если мы занимаемся продвижением, то мы постоянно улучшаем и дорабатываем механики, подход, чтобы улучшить результат.',
    description: '',
    button_text: 'Получить скидку',
    sale_mark: '45% до 20 апреля',
    points: [
      { id: '1', text: 'Сайты для бизнеса', order: 1 },
      { id: '2', text: 'Маркетинговая проработка', order: 2 },
      { id: '3', text: 'Время разработки до 2-3 недель', order: 3 },
    ],
  };
};

/**
 * Получить контент для секции "Для чего это нужно?"
 */
export const getPurposeSection = async (): Promise<PurposeSection> => {
  // TODO: Заменить на реальный запрос
  return {
    id: '1',
    title: 'Для чего это',
    highlighted_text: 'нужно?',
    items: [],
  };
};

/**
 * Получить контент для секции "Почему именно мы?"
 */
export const getWhyUsSection = async (): Promise<WhyUsSection> => {
  // TODO: Заменить на реальный запрос
  return {
    id: '1',
    title: 'Почему именно',
    highlighted_text: 'мы?',
    items: [],
  };
};

/**
 * Получить контент для секции "Исключены ситуации"
 */
export const getExcludedSection = async (): Promise<ExcludedSection> => {
  // TODO: Заменить на реальный запрос
  return {
    id: '1',
    title: 'У нас',
    highlighted_text: 'исключены',
    items: [],
  };
};

/**
 * Получить все тарифы
 */
export const getRates = async (category?: string): Promise<Rate[]> => {
  // TODO: Заменить на реальный запрос
  // const params = category ? { filter: { category } } : {};
  // const response = await apiClient.get('/rates', { params });
  // return response.data.data;
  
  return [];
};

/**
 * Получить все кейсы
 */
export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  // TODO: Заменить на реальный запрос
  // const response = await apiClient.get('/case_studies');
  // return response.data.data;
  
  return [];
};

/**
 * Получить один кейс по slug
 */
export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy | null> => {
  // TODO: Заменить на реальный запрос
  // const response = await apiClient.get(`/case_studies/${slug}`);
  // return response.data;
  
  return null;
};

/**
 * Получить все отзывы
 */
export const getReviews = async (): Promise<Review[]> => {
  // TODO: Заменить на реальный запрос
  return [];
};

/**
 * Получить все FAQ элементы
 */
export const getFAQItems = async (): Promise<FAQItem[]> => {
  // TODO: Заменить на реальный запрос
  return [];
};

/**
 * Получить всех партнеров
 */
export const getPartners = async (): Promise<Partner[]> => {
  // TODO: Заменить на реальный запрос
  return [];
};

/**
 * Получить контактную информацию
 */
export const getContactInfo = async (): Promise<ContactInfo> => {
  // TODO: Заменить на реальный запрос
  return {
    id: '1',
    phone: '+7 (995) 449-95-54',
    email: 'deykun.studio@gmail.com',
    telegram: 'https://t.me/qqmaik',
    whatsapp: 'https://wa.me/+79524280135',
  };
};

export default apiClient;

