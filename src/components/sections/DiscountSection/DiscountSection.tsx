/**
 * DiscountSection Component
 * Секция со скидками
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Button } from '@/components/ui';
import styles from './DiscountSection.module.scss';

export interface DiscountSectionProps {
  title?: string;
  highlightedText?: string;
  description?: string;
}

export const DiscountSection: React.FC<DiscountSectionProps> = ({
  title = 'Хотите дешевле?',
  highlightedText = 'скидку!',
  description = 'Для Вас мы придумали систему скидок! Узнайте, что мы придумали - оставляйте заявку и мы Вам расскажем',
}) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: 'request',
        data: {
          source: 'discount',
          formType: 'default',
        },
      })
    );
  };

  return (
    <section className={styles.discountSection}>
      <div className="container">
        <div className={styles.subCont}>
          <motion.div
            className={styles.secTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title} <br /> Выбирай свою <span>{highlightedText}</span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary" size="large" onClick={handleOpenModal} formType="default">
              Оставить заявку
            </Button>
          </motion.div>
        </div>
        <img src="/img/sec-6.png" alt="оставить заявку" className={styles.discountImg} />
      </div>
    </section>
  );
};

export default DiscountSection;

