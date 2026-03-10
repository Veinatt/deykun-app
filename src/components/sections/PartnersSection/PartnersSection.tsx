/**
 * PartnersSection Component
 * Секция с партнерами и клиентами
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PartnersSection.module.scss';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  order: number;
}

export interface PartnersSectionProps {
  partners?: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  const partnerItems: Partner[] = partners || [
    { id: '1', name: 'Додо Пицца', logo: '/img/part1.png', order: 1 },
    { id: '2', name: 'КитайСтрой', logo: '/img/part2.png', order: 2 },
    { id: '3', name: 'Сбер', logo: '/img/part3.png', order: 3 },
    { id: '4', name: 'Рунити', logo: '/img/part4.png', order: 4 },
    { id: '5', name: 'МФЦ', logo: '/img/part5.png', order: 5 },
    { id: '6', name: 'клуб ЦСКА', logo: '/img/part6.png', order: 6 },
    { id: '7', name: 'БелТелеком', logo: '/img/part7.png', order: 7 },
    { id: '8', name: 'Умскул', logo: '/img/part8.png', order: 8 },
    { id: '9', name: 'Фоксфорд', logo: '/img/part9.png', order: 9 },
    { id: '10', name: 'Tony Robbins', logo: '/img/part10.png', order: 10 },
    { id: '11', name: 'Проектная Компания №1', logo: '/img/part11.png', order: 11 },
    { id: '12', name: 'Дома Ем, доставка еды', logo: '/img/part12.png', order: 12 },
  ];

  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Наши партнеры и клиенты
        </motion.h1>

        <div className={styles.partnersCont}>
          {partnerItems.map((partner, index) => (
            <motion.img
              key={partner.id}
              src={partner.logo}
              alt={`партнер веб студии ${partner.name}`}
              className={styles.partnerLogo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

