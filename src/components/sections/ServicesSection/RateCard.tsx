/**
 * RateCard Component
 * Карточка тарифа
 */

import React from 'react';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { Button } from '@/components/ui';
import type { Rate } from '@/types';
import styles from './RateCard.module.scss';

export interface RateCardProps {
  rate: Rate;
}

export const RateCard: React.FC<RateCardProps> = ({ rate }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: 'request',
        data: {
          source: 'rates',
          formType: rate.slug || 'new',
        },
      })
    );
  };

  return (
    <div className={styles.rate}>
      <div className={styles.topOfCard}>
        <div className={styles.title}>{rate.name}</div>
        <div className={styles.desc}>{rate.description}</div>
        {rate.popular && <div className={styles.tag}>Популярно</div>}
      </div>

      <div className={styles.priceCont}>
        <div className={styles.our}>
          <div className={styles.price}>
            {rate.price.toLocaleString('ru-RU')} ₽
          </div>
          {rate.old_price && (
            <div className={styles.sale}>
              -{Math.round(((rate.old_price - rate.price) / rate.old_price) * 100)}%
            </div>
          )}
          <div className={styles.text}>до 25 июля</div>
        </div>
        {rate.old_price && (
          <div className={styles.them}>
            <div className={styles.price}>{rate.old_price.toLocaleString('ru-RU')} ₽</div>
            <div className={styles.text}>цена раньше</div>
          </div>
        )}
      </div>

      <div className={styles.pointCont}>
        <div className={styles.title}>В стоимость входит:</div>
        {rate.features.map((feature) => (
          <div key={feature.id} className={styles.point}>
            {feature.included ? '✓' : '✗'} {feature.text}
          </div>
        ))}
      </div>

      <Button variant="primary" onClick={handleOpenModal} formType={rate.slug || 'new'}>
        Оставить заявку
      </Button>
    </div>
  );
};

export default RateCard;

