/**
 * BenefitsSection Component
 * Секция "Вы будете спокойны за каждый вложенный рубль"
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BenefitsSection.module.scss';

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  order: number;
  bonus?: boolean;
}

export interface BenefitsSectionProps {
  title?: string;
  highlightedText?: string;
  items?: BenefitItem[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title = 'Вы будете спокойны',
  highlightedText = 'за каждый вложенный рубль',
  items,
}) => {
  const defaultItems: BenefitItem[] = [
    {
      id: '1',
      title: 'ОПТИМИЗАЦИЯ ПРОЦЕССОВ',
      description: 'Контроль сроков и задач проводится через CRM-систему. Заказчик к ней может подключиться и также контролировать все процессы',
      image: '/img/sec-7-1.png',
      order: 1,
    },
    {
      id: '2',
      title: 'КОМПЛЕКС ДЛЯ КАЖДОГО',
      description: 'Создание сайта и продвижение в одном заказе. Будем способствовать дальнейшему развитию вашего бизнеса',
      image: '/img/sec-7-2.png',
      order: 2,
    },
    {
      id: '3',
      title: 'ГАРАНТИЯ КАЧЕСТВА',
      description: 'Загрузка за 2 секунды. Четкий и понятный путь клиента от входа до кнопки «Купить»',
      image: '/img/sec-7-3.png',
      order: 3,
    },
    {
      id: '4',
      title: 'ЭКОНОМИЯ ВРЕМЕНИ',
      description: 'В среднем мы создаем сайты за 3 недели, но если вам нужно быстрее запуститься - мы это можем! Быстро формируем время, определяем сроки и стартуем!',
      image: '/img/sec-7-4.png',
      order: 4,
    },
    {
      id: '5',
      title: 'ЛЕГКАЯ ОПЛАТА',
      description: 'Мы работаем по 100% предоплате по договору, но если вы сомневаетесь, то договоримся на взаимовыгодные условия.',
      order: 5,
    },
    {
      id: '6',
      title: 'БЕСПЛАТНАЯ ТЕХПОДДЕРЖКА',
      description: 'Мы не пропадаем после создания сайта. Мы всегда смотрим наши проекты после их запуска и готовы помочь!',
      image: '/img/sec-7-5.png',
      order: 6,
      bonus: true,
    },
  ];

  const benefitsItems = items || defaultItems;

  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>{title}</span> <br /> {highlightedText}
        </motion.h1>

        <div className={styles.scCont}>
          {benefitsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.point} ${styles[`pnt${item.order}`]}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.image && <img src={item.image} alt={item.title} />}
              <div className={styles.pTitle}>
                {item.bonus && <p>БОНУС:</p>}
                {item.title}
              </div>
              <div className={styles.text}>{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

