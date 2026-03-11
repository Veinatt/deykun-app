/**
 * FormSection Component
 * Секция с формой заявки
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Button } from '@/components/ui';
import styles from './FormSection.module.scss';

export interface FormSectionProps {
  title?: string;
  highlightedText?: string;
  description?: string;
  formType?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title = 'Мы разработаем в срок веб-сайт, который будет',
  highlightedText = 'генерировать заявки',
  description = 'Четко соблюдаем все сроки. Составляем договор.',
  formType = 'middle',
}) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: 'request',
        data: {
          source: 'form_section',
          formType,
        },
      })
    );
  };

  return (
    <section className={styles.formSection}>
      <div className="container">
        <motion.div
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title} <span>{highlightedText}</span>
        </motion.div>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.div>

        <motion.div
          className={styles.formCont}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="primary" size="large" onClick={handleOpenModal} formType={formType}>
            Оставить заявку
          </Button>
          <img src={`${import.meta.env.BASE_URL}img/sec-6-form.png`} alt="оставить заявку" className={styles.formImg} />
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;

