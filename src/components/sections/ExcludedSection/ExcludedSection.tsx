/**
 * ExcludedSection Component
 * Секция "Исключены ситуации"
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '@/components/ui';
import type { ExcludedSection as ExcludedSectionType } from '@/types';
import styles from './ExcludedSection.module.scss';

export interface ExcludedSectionProps {
  content?: ExcludedSectionType;
}

export const ExcludedSection: React.FC<ExcludedSectionProps> = ({ content }) => {
  const items = content?.items || [
    {
      id: '1',
      text: 'Сайт и реклама не приносят заявок, а бюджеты сливаются в трубу',
      emoji_icon: 'img/emo-1.svg',
      order: 1,
    },
    {
      id: '2',
      text: 'Постоянно приходится что-то переделывать, а результат нулевой',
      emoji_icon: 'img/emo-2.svg',
      order: 2,
    },
    {
      id: '3',
      text: 'Работа затягивается, не соблюдаются дедлайны',
      emoji_icon: 'img/emo-3.svg',
      order: 3,
    },
    {
      id: '4',
      text: 'И многое, многое другое, страшное и ужасное',
      emoji_icon: 'img/emo-4.svg',
      order: 4,
      highlight: 'Только не с нами!',
    },
  ];

  const title = content?.title || 'У нас исключены ситуации когда:';
  const highlightedText = content?.highlighted_text || '';

  return (
    <section className={styles.deykunSec5}>
      <div className="container">
        <Title 
          level={1} 
          className={styles.secTitle}
        >
          {title} <span>{highlightedText}</span> 
        </Title>

        <div className={styles.cont}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.emoCont} ${index === 3 ? styles.lastEmoCont : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={import.meta.env.BASE_URL + item.emoji_icon} alt="исключенная ситуация" />
              <div>
                {item.text}
                {item.highlight && <p>{item.highlight}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcludedSection; 