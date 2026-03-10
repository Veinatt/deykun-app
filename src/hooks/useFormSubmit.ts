// src/hooks/useFormSubmit.ts
import { useState } from 'react';
import { IFormData } from '@/utils/types';

export const useFormSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: IFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки формы');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitForm, isLoading, error };
};