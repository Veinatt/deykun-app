/**
 * PurposeSection Component
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '@/components/ui'; // Импортируем новый компонент
import type { PurposeSection as PurposeSectionType } from '@/types';
import styles from './PurposeSection.module.scss';

export interface PurposeSectionProps {
  content?: PurposeSectionType;
}

export const PurposeSection: React.FC<PurposeSectionProps> = ({ content }) => {
  const items = content?.items || [
    {
      id: '1',
      title: 'Вызвать доверие и лояльность клиентов',
      image_small: '/img/sec-2-1-sm.png',
      image_large: '/img/sec-2-1-lg.png',
      order: 1,
    },
    {
      id: '2',
      title: 'Создать инструмент для привлечения клиентов',
      image_small: '/img/sec-2-2-sm.png',
      image_large: '/img/sec-2-2-lg.png',
      order: 2,
    },
    {
      id: '3',
      title: 'Пробить денежный потолок, в который ты уперся',
      image_small: '/img/sec-2-3-sm.png',
      image_large: '/img/sec-2-3-lg.png',
      order: 3,
    },
    {
      id: '4',
      title: 'Прокачать маркетинг',
      image_small: '/img/sec-2-4-sm.png',
      image_large: '/img/sec-2-4-lg.png',
      order: 4,
    },
  ];

  const title = content?.title || 'Для чего это';
  const highlightedText = content?.highlighted_text || 'нужно?';

  return (
    <section className={`${styles.deykunSec2} ${styles.animatedCont}`} id="sec_2">
      <div className="container">
        <Title
          level={1}
        >
          {title} <span>{highlightedText}</span>
        </Title>

        <div className={styles.scCont}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.point}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.topC}>
                <img className={styles.imgSm} src={item.image_small} alt={item.title} />
                <div>{item.title}</div>
              </div>
              <img 
                className={`${styles.imgLg} ${index === 0 ? styles.sec21Lg : ''}`} 
                src={item.image_large} 
                alt={item.title} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;