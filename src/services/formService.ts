/**
 * Сервис для отправки форм
 * В будущем будет интегрирован с Directus или другим бэкендом
 */

// import axios from 'axios';
import type { FormSubmission } from '../types/content.types';

// const FORM_API_URL = import.meta.env.VITE_FORM_API_URL || '/api/form';

/**
 * Отправить форму заявки
 */
export const submitForm = async (data: FormSubmission): Promise<{ success: boolean; message?: string }> => {
  try {
    // TODO: Заменить на реальный API endpoint
    // const response = await axios.post(FORM_API_URL, data);
    // return { success: true, message: response.data.message };
    
    // Временная заглушка - симуляция отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // В реальности здесь будет отправка на сервер
    console.log('Form submitted:', data);
    
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Произошла ошибка при отправке формы' 
    };
  }
};

/**
 * Валидация телефона
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
};

/**
 * Форматирование телефона
 */
export const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length === 0) return '';
  
  if (numbers.length <= 1) return `+7`;
  if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
  if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
  if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
  return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
};

/**
 * Интерфейс для данных формы
 */
export interface FormDataPayload {
  name: string;
  phone: string;
  contactMethod: string;
  comment?: string;
  source: string;
  formType: string;
}

/**
 * Отправить форму заявки на PHP обработчик
 */
export const submitFormData = async (
  data: FormDataPayload
): Promise<void> => {
  const formData = new FormData();
  
  // Маппинг данных для PHP обработчика
  formData.append('form_name', data.name);
  formData.append('form_tel', data.phone);
  formData.append('form_soc', data.contactMethod);
  formData.append('form_type', data.formType);
  
  if (data.comment) {
    formData.append('form_text', data.comment);
  }

  const response = await fetch('/form-handler.php', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // PHP обработчик не возвращает JSON, просто проверяем статус
  return;
};

