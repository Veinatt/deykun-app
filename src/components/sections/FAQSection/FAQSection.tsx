/**
 * FAQSection Component
 * Секция с часто задаваемыми вопросами
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui';
import type { FAQItem } from '@/types';
import styles from './FAQSection.module.scss';

export interface FAQSectionProps {
  items?: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const faqItems: FAQItem[] = items || [
    {
      id: '1',
      question: 'Что входит в стоимость сайта?',
      answer: [
        'В стоимость каждого сайта входит базовый пакет услуг, необходимых для запуска сайта:',
        'Список расписанных конкурентов (их плюсы, минусы и другие моменты)',
        'Разработанная майнд-карта вашего продукта и ЦА',
        'Аватар клиента',
        'Индивидуально разработанный дизайн',
        'Исходники верстки сайта',
      ],
      order: 1,
    },
    {
      id: '2',
      question: 'Откуда мы знаем, что это сработает?',
      answer: [
        'В первую очередь, мы делаем сайт не для заказчика, а для его клиентов, это нужно понять и принять, ведь они покупают у вас.',
        'Благодаря отработанным и проверенным инструментам - мы приносим результат, мы знаем - как достучаться до вашего клиента, знаем как показать ему полезность и донести ценность вашего продукта, чтобы он его купил.',
        'В этом нам помогает - маркетинг и анализ ;)',
      ],
      order: 2,
    },
    {
      id: '3',
      question: 'Зачем нужна контекстная реклама?',
      answer: [
        'Контекстная реклама облегчает потенциальным клиентам поиск нужных товаров или услуг. Это такое связующее звено между покупателями и компанией в интернете. Вроде бы всё просто, но нет, нужно еще и обойти конкурентов и сделать качественный прогрев на вашем сайте или иначе это грозит плохим трафиком и сливанием бюджета, и мы знаем это, поэтому не допускаем сливание ваших денег в пустую.',
      ],
      order: 3,
    },
    {
      id: '4',
      question: 'Какие сроки создания моего сайта?',
      answer: [
        'Срок разработки сайта зависит от сложности сайта и характера информации.',
        'Например, запустить сайт с 3 блоками можно в районе недели.',
        'В "обычном" случае время разработки 3-4 недели. Но так же зависит и от оперативности самого Клиента (сколько потребуется времени на согласование разработанного дизайна, подготовку замечаний, сбор материалов для сайта).',
      ],
      order: 4,
    },
  ];

  const accordionItems = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: (
      <div className={styles.accContentC}>
        {item.answer.map((text, index) => (
          <div key={index} className={index === 0 ? styles.desc : styles.point}>
            {text}
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Часто задаваемые вопросы
        </motion.h1>

        <div className={styles.accCont}>
          <Accordion items={accordionItems} allowMultiple={false} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

