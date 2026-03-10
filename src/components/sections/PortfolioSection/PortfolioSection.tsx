/**
 * PortfolioSection Component
 * Секция с кейсами (портфолио)
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Button } from '@/components/ui';
import type { CaseStudy, CaseImage } from '@/types';
import styles from './PortfolioSection.module.scss';

export interface PortfolioSectionProps {
  cases?: CaseStudy[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ cases }) => {
  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState(false);
// Функция для преобразования массива строк в массив CaseImage
const mapImagesToCaseImages = (urls: string[]): CaseImage[] => {
  return urls.map((url, index) => ({
    id: `img-${index}`, // можно генерировать уникальный id (или использовать url, если он уникален)
    image: url,
    order: index + 1,
  }));
};
  // Основные кейсы (показываются сразу)
  const mainCases: CaseStudy[] = cases?.slice(0, 4) || [
    {
      id: '1',
      title: 'Полная разработка лендинга для строительной компании',
      slug: 'pso',
      profit: '195 000 000 ₽',
      description:
        'Провели маркетинговые исследования, на основании полученых данных и просьб клиента, разработали посадочную страницу с дополнительной тендерной формой. Так же, в пожелании заказчика было то, чтобы заявки приходили в телеграм - реализовано. После проверки эффективности сайта с точки зрения UX/UI и оптимизации, запустили контестную рекламу на очень сложную и очень узкую-нишу (коммерческое строительство объектов класса А) Оптимизируя компанию каждый день, проверяя эффективность метрик и вебвизор, дошли до первых клиентов, а в последствии - продаж. Так же, провели мастер-класс по digital-продажам и продвижению основным лицам компании.',
      color: '#1A1A1A',
      images:  mapImagesToCaseImages(['/img/pso_1.png', '/img/pso_2.png', '/img/pso_3.png']),
      order: 1,
    },
    {
      id: '2',
      title: 'Полная разработка лендинга для клуба ЦСКА',
      slug: 'cska',
      profit: 'не разглашается',
      description:
        'Провели маркетинговые исследования, на основании полученых данных произвели разработку промо-сайта для знаменитого клуба и подарили ему солдаут на праздничный матч. Работа производилась согласно брендбуку огранизации, учитывая её стилистические особенности.',
      color: '#B11116',
      images: mapImagesToCaseImages(['/img/cska_1.png', '/img/cska_2.png', '/img/cska_3.png']),
      order: 2,
    },
    {
      id: '3',
      title: 'Работа со СБЕР и его дочерним проектом',
      slug: 'sber',
      profit: 'не разглашается',
      description:
        'Разработали лендинг для двух сегментов. Проект включал все инструменты маркетинговых исследований (ЦА, конкуренты, ниша, продукт, точки паритета и отличия и прочее), настройку рекламы в Яндекс.Директ. Результат: 59 лидов за 630 рублей за 3 недели (предыдущая кампания (не наша): 37 лидов за 1689 рублей за 3 месяца). A/B тесты показали, что квиз неэффективен. Последущие данные и работа находится под NDA.',
      color: '#1CC454',
      images: mapImagesToCaseImages(['/img/sber_1.png', '/img/sber_2.png', '/img/sber_3.png']),
      order: 3,
    },
    {
      id: '4',
      title: 'Сайт для мебельной студии из Санкт-Петербурга',
      slug: 'furniture',
      profit: '1 730 000 ₽',
      description: 'Информация о ходе разработки находится под NDA.',
      color: '#51504F',
      images: mapImagesToCaseImages(['/img/3_1.png', '/img/3_2.png', '/img/3_3.png']),
      order: 4,
    },
  ];

  // Дополнительные кейсы (скрыты по умолчанию)
  const additionalCases: CaseStudy[] = cases?.slice(4) || [
    {
      id: '5',
      title: 'Лендинг для массажного салона в Ярославле',
      slug: 'massage',
      profit: '580 000 ₽',
      description:
        'Произвели разбор маркетинга: анализ конкурентов из региона, ниши, продукта. На основе полученой информации прописали ядро оффера (боли, потребности, страхи) Разработали прототип будущего сайта и за ним дизайн-упаковку. После прозвели верстку сайта на чистом коде. На посадочную страницу запустили трафик (Я.Директ), попутно анализируя и оптимизируя входящие заявки и на основе этого доработали лендинг.',
      color: '#F68980',
      images: mapImagesToCaseImages(['/img/2_1.png', '/img/2_2.png', '/img/2_3.png']),
      order: 5,
    },
    {
      id: '6',
      title: 'Полная разработка лендинга для онлайн и офлайн обменника валют',
      slug: 'exchange',
      profit: '1 000 000 ₽',
      description:
        'Молодому стартапу требовалась посадочная страница с кулькулятором (для подсчета обменного курса) Мы взяли в работу проект под ключ. Провели нужные исследования зарубежного рынка, на основании этого начали просчитывать экономику курса валют, после чего разработали полностью сайт, подключили к нему телеграм бота и телеграм каналы. Далее провели A/B тестирование на контестной рекламе, получив данные оптимизировали всю рекламную компанию и отправили молодой стартап в дорогу к хорошей прибыли.',
      color: '#67C2A9',
      images: mapImagesToCaseImages(['/img/swap_1.png', '/img/swap_2.png', '/img/swap_3.png']),
      order: 6,
    },
    {
      id: '7',
      title: 'Лендинг для образовательной онлайн-платформы',
      slug: 'education',
      profit: 'не разглашается',
      description: 'Провели маркетинговые исследования, сделали wireframe-прототип, затем сделали дизайн, сверстали сайт и подключили оплату',
      color: '#4669EE',
      images: mapImagesToCaseImages(['/img/1_1.png', '/img/1_2.png', '/img/1_3.png']),
      order: 7,
    },
    {
      id: '8',
      title: 'Полная разработка лендинга для маркетингового агентства',
      slug: 'marketing-agency',
      profit: 'не разглашается',
      description:
        'К нам обратились наши коллеги, мы с радостью решили им помочь. Все исследования с их стороны были уже проведены, но мы решили немного перепроверить и нашли, что можно улучшить. На основании взаимных договоренностей разработали под ключ лендинг под услуги наших коллег.',
      color: '#FC026B',
      images: mapImagesToCaseImages(['/img/kitkot_1.png', '/img/kitkot_2.png', '/img/kitkot_3.png']),
      order: 8,
    },
    {
      id: '9',
      title: 'Полная разработка лендинга для благотворительного фонда',
      slug: 'charity',
      profit: 'не разглашается',
      description:
        'Разработали сайт-помощник/многостраничник для благотворительного фонда. Требовался максимально позитивный и молодежный дизайн, и максимальная оптимизация сайта для быстрой работы. Пожелания учли и добавили от себя оптимальную настройку SEO. Подключили 3 платежных системы на сайт, разработали Frontend и Backend часть.',
      color: '#6E73DB',
      images: mapImagesToCaseImages(['/img/nastya_1.png', '/img/nastya_2.png', '/img/nastya_3.png']),
      order: 9,
    },
    {
      id: '10',
      title: 'Полная разработка лендинга для частной охранной организации (ЧОП)',
      slug: 'security',
      profit: 'не разглашается',
      description: 'Информация о ходе разработки находится под NDA.',
      color: '#C7A103',
      images: mapImagesToCaseImages(['/img/col_1.png', '/img/col_2.png', '/img/col_3.png']),
      order: 10,
    },
    {
      id: '11',
      title: 'Лендинг для nft-стартапа',
      slug: 'nft',
      profit: 'не разглашается',
      description: 'Информация о ходе разработки находится под NDA.',
      color: '#1A1A1A',
      images: mapImagesToCaseImages(['/img/nft_1.png', '/img/nft_2.png', '/img/nft_3.png']),
      order: 11,
    },
    {
      id: '12',
      title: 'Лендинг для зарубежной частной школы',
      slug: 'school',
      profit: '1 688 000 ₽',
      description:
        'Произведен полный комплекс упаковки зарубежной офлайн школы. От рекламный баннеров и методичек, до сайта и сертификатов. Так же, были произведены работы по верстке сайта и его реализация и тестирование в таргетированной рекламе Facebook',
      color: '#A371EA',
      images: mapImagesToCaseImages(['/img/aspi_1.png', '/img/aspi_2.png', '/img/aspi_3.png']),
      order: 12,
    },
    {
      id: '13',
      title: 'Интернет-магазин для магазина табачной продукции',
      slug: 'tobacco',
      profit: 'не разглашается',
      description: 'Провели маркетинговые исследования, сделали wireframe-прототип, затем сделали дизайн, сверстали сайт и подключили оплату',
      color: '#ED684A',
      images: mapImagesToCaseImages(['/img/indi_1.png', '/img/indi_2.png', '/img/indi_3.png']),
      order: 13,
    },
    {
      id: '14',
      title: 'Полная разработка интернет-магазина для онлайн-шоурума',
      slug: 'showroom',
      profit: '974 000 ₽',
      description:
        'Провели маркетинговые исследования, сделали wireframe-прототип, затем реализовали минималистичный дизайн, произвели работу над Frontend и Backend частью сайта, разработали индивидуальную админ-панель с учетом пожелания клиента, интегрировали сайт на всевозможные соцсети и мессендежры, после, запустили его на сервере.',
      color: '#282828',
      images: mapImagesToCaseImages(['/img/rain_1.png', '/img/rain_2.png', '/img/rain_3.png']),
      order: 14,
    },
    {
      id: '15',
      title: 'Полная разработка интернет-магазина фабрики элитных дверей',
      slug: 'doors',
      profit: '1 100 000 ₽',
      description:
        'Провели маркетинговые исследования, на основании исследований проработали 30+ страниц интернет-магазина (прототипирование), после чего работая по брендбуку и визуальным паттернам компании разработали минималистичный премиум-дизайн. Далее разработали Frontend и Backend часть сайта, настроили терминал на сайте (оплата), подключили к Битрикс24 и интегрировали с внутренней CRM.',
      color: '#97BFAA',
      images: mapImagesToCaseImages(['/img/imp_1.png', '/img/imp_2.png', '/img/imp_3.png']),
      order: 15,
    },
    {
      id: '16',
      title: 'Приложение для nft-стартапа',
      slug: 'nft-app',
      profit: 'не разглашается',
      description:
        'Крипто-NFT стартап нуждался в легком приложении на основе API сайта, который до этого так же разрабатывался силами нашей команды. Благодаря тому, что работу над сайтом и его API вела наша команда, мы смогли в короткие сроки разработать UX/UI дизайн приложения и разработать программно для IOS и Android само приложение.',
      color: '#1A1A1A',
      images: mapImagesToCaseImages(['/img/nftapp_1.png', '/img/nftapp_2.png', '/img/nftapp_3.png']),
      order: 16,
    },
  ];

  const handleOpenModal = (caseSlug: string) => {
    dispatch(
      openModal({
        type: 'example',
        data: {
          source: 'portfolio',
          formType: caseSlug,
        },
      })
    );
  };


  return (
    <section className={styles.portfolioSection} id="port">
      <div className="container">
        <motion.h1
          className={styles.secTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Работы нашей студии
        </motion.h1>

        <motion.div
          className={styles.subTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Сайты, которые уже работают и зарабатывают с плюсовой конверсией
        </motion.div>

        <div className={styles.exmplCont}>
          {mainCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className={styles.exmpl}
              style={{ backgroundColor: caseItem.color }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={`/img/${caseItem.slug}.png`} alt={caseItem.title} className={styles.rev} />
              <div className={styles.infoCont}>
                <div className={styles.title}>{caseItem.title}</div>
                <div className={styles.profit} style={{ borderColor: `color-mix(in srgb, ${caseItem.color}, #fff 30%)` }}>
                  Прибыль с сайта - {caseItem.profit}
                </div>
                <div className={styles.desc}>{caseItem.description}</div>
                <Button variant="outline" onClick={() => handleOpenModal(caseItem.slug)} className={styles.more}>
                  Подробнее
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.acc}>
          <motion.div
            className={`${styles.accContent} ${showMore ? styles.show : ''}`}
            initial={false}
            animate={{ maxHeight: showMore ? '10000px' : '0' }}
            transition={{ duration: 0.5 }}
          >
            {additionalCases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                className={styles.exmpl}
                style={{ backgroundColor: caseItem.color }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <img src={`/img/${caseItem.slug}.png`} alt={caseItem.title} className={styles.rev} />
                <div className={styles.infoCont}>
                  <div className={styles.title}>{caseItem.title}</div>
                  <div className={styles.profit} style={{ borderColor: `color-mix(in srgb, ${caseItem.color}, #fff 30%)` }}>
                    Прибыль с сайта - {caseItem.profit}
                  </div>
                  <div className={styles.desc}>{caseItem.description}</div>
                  <Button variant="outline" onClick={() => handleOpenModal(caseItem.slug)} className={styles.more}>
                    Подробнее
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Button variant="secondary" onClick={() => setShowMore(!showMore)} className={styles.showMoreBtn}>
            {showMore ? 'Скрыть' : 'Показать ещё'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

