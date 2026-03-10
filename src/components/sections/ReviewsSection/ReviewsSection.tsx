/**
 * ReviewsSection Component
 * Секция с отзывами клиентов
 */

import React from 'react';
import { motion } from 'framer-motion';
import { SwiperWrapper } from '@/components/ui';
import type { Review } from '@/types';
import styles from './ReviewsSection.module.scss';

export interface ReviewsSectionProps {
  reviews?: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const reviewItems: Review[] = reviews || [
    {
      id: '1',
      author_name: 'Светлана Нечаева',
      service: 'Создание сайта',
      company: 'Nechaeva',
      text: 'Мы обратились к Кириллу для разработки нашего сайта. Была произведена большая работа по разработке функционала, которая выполнена на профессиональном уровне с высоким качеством. В целом сайт получился нежный как и я сама. Благодарю за интуитивный и индивидуальный подход к клиенту. Выражаю огромную благодарность за усердный труд.',
      order: 1,
    },
    {
      id: '2',
      author_name: 'Максим Тарасевич',
      service: 'Создание сайта',
      company: 'Prestige',
      text: 'Кирилл невероятной скорости выполнения человек, ещё каким-то образом угадал все мои желания, которые даже я не знал, так в добавок ещё и идеальную работу провёл. Сделал вывод: если ты не поработал с Кириллом, то можно считать, что жизнь прожил зря',
      order: 2,
    },
    {
      id: '3',
      author_name: 'Алексей Бабкин',
      service: 'Создание сайта',
      company: 'GKS31',
      text: 'Заказал сайт, сделали на отлично, всё настроили. Разработчик знает своё дело! Рекомендую!',
      order: 3,
    },
    {
      id: '4',
      author_name: 'Виктор Бандалет',
      service: 'Создание сайта',
      company: 'KCC',
      text: 'Сделали быстро, качественно и больше, чем требовалось. Профессионалы своего дела',
      order: 4,
    },
    {
      id: '5',
      author_name: 'Сергей Маширов',
      service: 'Создание сайта',
      company: 'Proffmaster',
      text: '1. Сайт понравился, просто и понятно\n2. По срокам не долго, хоть и несколько раз передвигались сроки\n3. Общее впечатление хорошее, радует последующее сопровождение и разъяснение моментов связанных с работой сайта.',
      order: 5,
    },
    {
      id: '6',
      author_name: 'Валентин Лычёв',
      service: 'Создание сайта',
      company: 'Frelval',
      text: 'Заказал не большой лендинг, нужно было портфолио поместить в него. Сделали все качественно и быстро, учли все пожелания и дали свои рекомендации. Спасибо!',
      order: 6,
    },
    {
      id: '7',
      author_name: 'Марина Михайленко',
      service: 'Создание сайта',
      company: 'Liberty Queen',
      text: 'Нужен был сайт, посоветовали эту студию. Дизайн был готов, так что нужно было просто его сделать. Скинула дизайн, мне дали совет как можно улучшить его и предложили помочь с этим. Не соврали, сделали и вправду лучше! Сайт сделали быстро, всем довольна, буду обращаться к вам еще)',
      order: 7,
    },
    {
      id: '8',
      author_name: 'Владимир Фоменко',
      service: 'Создание сайта',
      company: 'BGTU',
      text: 'Общались с Кириллом по поводу дизайна логотипа, предложил свои идеи, мне понравилось так и начали работать. Не прошло и дня как логотип был готов. Спасибо))',
      order: 8,
    },
    {
      id: '9',
      author_name: 'Денис Агафонов',
      service: 'Создание сайта',
      company: 'Korshool',
      text: 'Хороший сайт, сделали быстро',
      order: 9,
    },
    {
      id: '10',
      author_name: 'Денис Муравьев',
      service: 'Создание сайта',
      company: 'Beltelecom',
      text: 'Кирилл один из немногих профессионалов своего дела, который подходит к заказу со всей ответственностью. Всегда держит всю информацию у себя в голове, из-за чего процесс разработки сайтов происходит быстро, четко и без косяков. Приятный молодой человек.',
      order: 10,
    },
  ];

  const swiperSlides = reviewItems.map((review) => (
    <div key={review.id} className={styles.reviewCard}>
      <div className={styles.name}>{review.author_name}</div>
      <div className={styles.infoCont}>
        <div className={styles.spec}>{review.service}</div>
        <div className={styles.org}>{review.company}</div>
      </div>
      <div className={styles.text}>{review.text}</div>
    </div>
  ));

  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Отзывы</span> наших <br /> любимых клиентов
        </motion.h1>

        <SwiperWrapper
          slides={swiperSlides}
          className={styles.swiperReview}
          navigation={true}
          pagination={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        />
      </div>
    </section>
  );
};

export default ReviewsSection;

