/**
 * ServicesSection Component
 * Секция с тарифами и табами
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Tabs } from '@/components/ui';
import { Button } from '@/components/ui';
import RateCard from './RateCard';
import type { Rate } from '@/types';
import styles from './ServicesSection.module.scss';

export interface ServicesSectionProps {
  rates?: Rate[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ rates }) => {
  const dispatch = useAppDispatch();
  const [showMoreServices, setShowMoreServices] = useState(false);

  // Моковые данные тарифов
  const solutionsRates: Rate[] = rates?.filter((r) => r.category === 'solutions') || [
    {
      id: '1',
      name: 'Быстрый Старт',
      slug: 'fast-start',
      description: 'Быстрый старт в digital для фрилансеров, самозанятых, микро - и малого бизнеса.',
      price: 150000,
      features: [
        { id: '1', text: 'Инструмент Сайт под ключ-Ш', included: true, order: 1 },
        { id: '2', text: 'Контекстная или таргетированная реклама — 30 дней (бюджет отдельно)', included: true, order: 2 },
        { id: '3', text: 'Базовый маркетинговый анализ ниши и ЦА', included: true, order: 3 },
        { id: '4', text: '3 оффера + 1 УТП', included: true, order: 4 },
        { id: '5', text: 'Базовая визуальная упаковка (соцсети, логотип, визитка)', included: true, order: 5 },
        { id: '6', text: 'Подключение и базовая настройка CRM (сайт + соцсети)', included: true, order: 6 },
        { id: '7', text: 'Техподдержка 1 месяц', included: true, order: 7 },
      ],
      category: 'solutions',
      order: 1,
    },
    {
      id: '2',
      name: 'Оптимальный Старт',
      slug: 'optimal-start',
      description: 'Усиленный старт в digital для фрилансеров, самозанятых, микро- и малого бизнеса. Помогает быстрее закрепиться онлайн, выстроить стабильный поток клиентов и начать удержание.',
      price: 200000,
      features: [
        { id: '1', text: 'Всё из «Быстрого старта»', included: true, order: 1 },
        { id: '2', text: 'Контент-стратегия и контент-план на 1 месяц', included: true, order: 2 },
        { id: '3', text: '10 готовых постов для соцсетей', included: true, order: 3 },
        { id: '4', text: 'Подключение и настройка доп. сервисов(Яндекс.Карты, Яндекс.Бизнес, YClients и др.)', included: true, order: 4 },
      ],
      category: 'solutions',
      order: 2,
    },
    {
      id: '3',
      name: 'Бизнес на максимум',
      slug: 'business-max',
      description: 'Полное закрытие Digital-направления для среднего бизнеса и проектов, которым нужен системный рост. От запуска с нуля — к стабильной прибыли и понятной стратегии развития.',
      price: 390000,
      popular: true,
      features: [
        { id: '1', text: 'Всё из «Оптимального старта»', included: true, order: 1 },
        { id: '2', text: 'Сайт под ключ индивидуальный', included: true, order: 2 },
        { id: '3', text: 'Таргет + контекст — 1 месяц', included: true, order: 3 },
        { id: '4', text: 'SEO продвижение — 1 месяц', included: true, order: 4 },
        { id: '5', text: 'Функциональная стратегия бизнеса', included: true, order: 5 },
        { id: '6', text: 'Автоворонка под продукт / услугу', included: true, order: 6 },
        { id: '7', text: 'ИИ-менеджер для обработки обращений', included: true, order: 7 },
        { id: '8', text: 'Видеопродакшен рекламного ролика', included: true, order: 8 },
        { id: '9', text: 'Бонус: 30 000 ₽ рекламного бюджета', included: true, order: 9 },
        { id: '10', text: 'Бонус: ведение SMM — 1 месяц', included: true, order: 10 },
      ],
      category: 'solutions',
      order: 3,
    },
  ];

  const toolsRates: Rate[] = rates?.filter((r) => r.category === 'tools') || [
    {
      id: '4',
      name: 'Сайт под ключ индивидуальный',
      slug: 'custom-site',
      description: 'Важно: формат сайта — лендинг / визитка / витрина. Сложные сайты возможны на отдельных условиях.',
      price: 75000,
      features: [
        { id: '1', text: 'Маркетинговый анализ', included: true, order: 1 },
        { id: '2', text: 'Прототипировка', included: true, order: 2 },
        { id: '3', text: 'Индивидуальный дизайн (UX/UI)', included: true, order: 3 },
        { id: '4', text: '3 варианта концепта дизайна', included: true, order: 4 },
        { id: '5', text: 'Верстка сайта + подключение аналитики', included: true, order: 5 },
        { id: '6', text: 'Техподдержка 1 месяц', included: true, order: 6 },
        { id: '7', text: 'Домен, хостинг, настройка и запуск', included: true, order: 7 },
        { id: '8', text: 'Копирайтинг', included: true, order: 8 },
        { id: '9', text: 'Оптимальная SEO-оптимизация', included: true, order: 9 },
      ],
      category: 'tools',
      order: 1,
    },
    {
      id: '5',
      name: 'Сайт под ключ шаблонный',
      slug: 'template-site',
      description: 'Важно: формат сайта — только лендинг. Шаблон — это готовый дизайн, а не CMS или админка.',
      price: 30000,
      features: [
        { id: '1', text: 'Базовый маркетинговый анализ', included: true, order: 1 },
        { id: '2', text: 'Индивидуальный копирайтинг', included: true, order: 2 },
        { id: '3', text: 'Адаптация шаблона в дизайне', included: true, order: 3 },
        { id: '4', text: 'Верстка + подключение аналитики', included: true, order: 4 },
        { id: '5', text: 'Домен, хостинг, настройка и запуск', included: true, order: 5 },
        { id: '6', text: 'Техподдержка 1 месяц', included: true, order: 6 },
      ],
      category: 'tools',
      order: 2,
    },
    {
      id: '6',
      name: 'Съемка роликов',
      slug: 'video-production',
      description: 'Производство рекламных, информационных, развлекательных видео и подкастов. Полный продакшн: от идеи и сценария до готового ролика.',
      price: 100000,
      features: [
        { id: '1', text: 'Проработка ТЗ и сценария', included: true, order: 1 },
        { id: '2', text: 'Подбор актёра и локации / студии', included: true, order: 2 },
        { id: '3', text: 'Формирование съёмочной группы', included: true, order: 3 },
        { id: '4', text: 'Медиапланирование и бюджеты', included: true, order: 4 },
        { id: '5', text: 'Съёмка и монтаж видеоролика', included: true, order: 5 },
        { id: '6', text: 'Сопровождение проекта', included: true, order: 6 },
      ],
      category: 'tools',
      order: 3,
    },
  ];

  const supportRates: Rate[] = rates?.filter((r) => r.category === 'support') || [
    {
      id: '7',
      name: 'Выкуп Агенства',
      slug: 'agency-buyout',
      description: 'Сопровождение',
      price: 10000,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить всю команду агенства для решения любых задач компании. Выкуп происходит по часам. Агенство может забрать любые бизнес-задачи, от внутреннего подключения и наладки процессов, аналитики по направлениям(маркетинг, разработка, дизайн, менеджент)до запуска нового продукта компании.',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 1,
    },
    {
      id: '8',
      name: 'Маркетинг Поддержка',
      slug: 'marketing-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить маркетолога. Маркетолог может закрыть задачи по аналитике воронки и РК, анализу (ЦА, рынок, ниша, конкуренты), исследованию, стратегии, части копирайтинга, прототипировка',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 2,
    },
    {
      id: '9',
      name: 'Дизайн Поддержка',
      slug: 'design-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить дизайнера. Дизайнер может закрыть задачи по инфографике, креативам, баннерам, веб-дизайн, UX/UI дизайн',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 3,
    },
    {
      id: '10',
      name: 'Фронтенд Поддержка',
      slug: 'frontend-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить Frontend-разработчика. Разработчик может закрыть задачи по технической доработке сайта, добавление анимаций, изменить блоки на сайте, верстка нового сайта, добавить новые элементы в сайт',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 4,
    },
    {
      id: '11',
      name: 'Dev Поддержка',
      slug: 'dev-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить Деволопера. Дев-специалист может закрывать задачи по технической настройке чего-то требующего API, интеграции, разработка ботов, частично Backend, разобрать архитектуру и подобрать инструментарий, техническая оценка проекта',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 5,
    },
    {
      id: '12',
      name: 'Перфоманс Поддержка',
      slug: 'performance-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить перфоманс специалистов (рекламный менеджер) Всего на выкуп 3 направления: Таргет, Контекст, SEO, цена указана за 1 специалиста. Нужно больше одного направления? И это возможно! +1 ставка за час. Перфоманс специалист может закрывать любые задачи связанные с рекламой.',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 6,
    },
    {
      id: '13',
      name: 'СММ Поддержка',
      slug: 'smm-support',
      description: 'Сопровождение',
      price: 1500,
      features: [
        {
          id: '1',
          text: 'Данная услуга позволяет выкупить СММ специалиста. СММ может закрывать задачи посоставлению контент плана, анализ постов, подбор ToV, упаковка конвертерав соцсетях/мессенджера, подбор инфлюенсеров для посевов, написание и составление постов',
          included: true,
          order: 1,
        },
      ],
      category: 'support',
      order: 7,
    },
  ];

  const additionalServices = [
    { id: '1', title: 'Интернет магазин', price: 'от 1 300 000 ₽', formType: 'market' },
    { id: '2', title: 'Мобильное приложение', price: 'от 1 800 000 ₽', formType: 'mobapp' },
    { id: '3', title: 'Корпоративный сайт', price: 'от 1 000 000 ₽', formType: 'corp' },
    { id: '4', title: 'Digital-поддержка', price: 'от 3 500 ₽/час', formType: 'digital' },
  ];

  const handleOpenModal = (formType: string) => {
    dispatch(
      openModal({
        type: 'request',
        data: {
          source: 'additional_services',
          formType,
        },
      })
    );
  };

  const tabs = [
    {
      id: 'solutions',
      label: 'Решения',
      content: (
        <div className={styles.rateCont}>
          {solutionsRates.map((rate) => (
            <RateCard key={rate.id} rate={rate} />
          ))}
        </div>
      ),
    },
    {
      id: 'tools',
      label: 'Инструменты',
      content: (
        <div className={styles.rateCont}>
          {toolsRates.map((rate) => (
            <RateCard key={rate.id} rate={rate} />
          ))}
        </div>
      ),
    },
    {
      id: 'support',
      label: 'Сопровождение',
      content: (
        <div className={styles.rateCont}>
          {supportRates.map((rate) => (
            <RateCard key={rate.id} rate={rate} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className={styles.servicesSection} id="rates">
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Выберите <span className={styles.titleAccent}>нужное</span>
        </motion.h1>

        <Tabs tabs={tabs} defaultTab="solutions" useRedux={false} tabGroupId="rates" />

        <div className={styles.acc}>
          <div className={`${styles.accContent} ${showMoreServices ? styles.show : ''}`}>
            {additionalServices.map((service) => (
              <div key={service.id} className={styles.dopRate}>
                <div className={styles.info}>
                  <div className={styles.title}>{service.title}</div>
                  <div className={styles.price}>{service.price}</div>
                </div>
                <Button variant="outline" size="small" onClick={() => handleOpenModal(service.formType)}>
                  Подробнее
                </Button>
              </div>
            ))}
          </div>
          <Button
            variant="secondary"
            onClick={() => setShowMoreServices(!showMoreServices)}
            className={styles.moreBtn}
          >
            Другие услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

