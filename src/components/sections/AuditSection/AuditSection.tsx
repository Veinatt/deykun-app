/**
 * AuditSection Component
 * Секция с предложением бесплатного аудита
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Button } from '@/components/ui';
import styles from './AuditSection.module.scss';

export interface AuditSectionProps {
  title?: string;
  highlightedText?: string;
  hint1?: string;
  hint2?: string;
  formType?: string;
}

export const AuditSection: React.FC<AuditSectionProps> = ({
  title = 'Мы можем бесплатно провести консультацию или аудит и предложить идеи,',
  highlightedText = 'как Вам увеличить прибыль в интернете',
  hint1 = 'Осталось 2 из 10 мест',
  hint2 = 'за 0₽',
  formType = 'last',
}) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: 'request',
        data: {
          source: 'audit',
          formType,
        },
      })
    );
  };

  return (
    <section className={styles.auditSection}>
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title} <span>{highlightedText}</span>
        </motion.h1>

        <motion.div
          className={styles.hintCont}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.hint}>{hint1}</div>
          <div className={styles.hint}>
            {hint2} <del>7 499₽</del>
          </div>
        </motion.div>

        <motion.div
          className={styles.formCont}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={`${import.meta.env.BASE_URL}img/sec-16.png`} alt="оставить заявку, аудит" className={styles.auditImg} />
          <div className={styles.formWrapper}>
            <Button variant="primary" size="large" onClick={handleOpenModal} formType={formType} fullWidth>
              Оставить заявку
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;

