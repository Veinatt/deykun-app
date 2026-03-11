/**
 * WhyUsSection Component
 * Секция "Почему именно мы?"
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Title } from '@/components/ui';
import styles from './WhyUsSection.module.scss';

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  bgColor?: string;
}

export interface WhyUsSection {
  id: string;
  title: string;
  highlighted_text: string;
  items: WhyUsItem[];
}
export interface WhyUsSectionProps {
  content?: WhyUsSection;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ content }) => {
  const items: WhyUsItem[] = content?.items || [
    {
      id: '1',
      title: 'Предварительная подготовка',
      description: 'Полный предварительный аудит: сайта (если он есть), конкурентов, целевой аудитории и разработка дорожной карты развития',
      icon: 'img/sec-2-why-1.svg',
      order: 1,
      bgColor: '#FFEBE7',
    },
    {
      id: '2',
      title: 'Привлечение новых клиентов.',
      description: 'Сайт готов к потоку посетителей с первого дня работы. Благодаря этому вы получите новых клиентов, и вернете старых.',
      icon: 'img/sec-2-why-2.svg',
      order: 2,
      bgColor: '#FFF7E7',
    },
    {
      id: '3',
      title: 'Снимаем с вас все задачи',
      description: 'Избавьте себя от головной боли! Вам не нужно контролировать каждый шаг. Заказал – оплатил – получил',
      icon: 'img/sec-2-why-3.svg',
      order: 3,
      bgColor: '#E7FFE8',
    },
    {
      id: '4',
      title: 'Быстрый старт',
      description: 'Быстрый взлет за счет правильного позиционирования',
      icon: 'img/sec-2-why-4.svg',
      order: 4,
      bgColor: '#E7EFFF',
    },
    {
      id: '5',
      title: 'Умный подход к рекламе',
      description: 'Разные УТП для разных сегментов целевой аудитории',
      icon: 'img/sec-2-why-5.svg',
      order: 5,
      bgColor: '#FFE7FA',
    },
    {
      id: '6',
      title: 'Главное для нас - это качество',
      description: 'Главный критерий - качество, а не количество',
      icon: 'img/sec-2-why-6.svg',
      order: 6,
      bgColor: '#FFFDE7',
    },
  ];

  const title = content?.title || 'Почему именно мы?';
  const highlightedText = content?.highlighted_text || '';

  return (
    <section className={styles.deykunSec2Why}>
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
              className={`${styles.point} ${styles[`pnt${item.order}`]}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={item.bgColor ? { '--bg-color': item.bgColor } as React.CSSProperties : undefined}
            >
              <div className={styles.imgCont}>
                <img src={import.meta.env.BASE_URL + item.icon} alt={item.title} />
              </div>
              <div className={styles.infoCont}>
                <Title level={4} marginBottom={10} className={styles.pTitle}>
                  {item.title}
                </Title>
                <div className={styles.text}>{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;