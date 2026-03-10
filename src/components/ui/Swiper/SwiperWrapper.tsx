/**
 * SwiperWrapper Component
 * Обертка для библиотеки Swiper с предустановленными настройками
 */

import React, { useRef, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './SwiperWrapper.module.scss';

export interface SwiperWrapperProps {
  slides: React.ReactNode[];
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  autoplay?: boolean | { delay: number };
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  speed?: number;
  className?: string;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number;
      spaceBetween?: number;
    };
  };
}

export const SwiperWrapper: React.FC<SwiperWrapperProps> = ({
  slides,
  slidesPerView = 1,
  spaceBetween = 0,
  autoplay = false,
  loop = false,
  navigation = false,
  pagination = false,
  effect = 'slide',
  speed = 300,
  className = '',
  breakpoints,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const modules = [Autoplay];
  if (navigation) modules.push(Navigation);
  if (pagination) modules.push(Pagination);
  if (effect === 'fade') modules.push(EffectFade);

  return (
    <div className={`${styles.swiperWrapper} ${className}`}>
      <Swiper
        modules={modules}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        autoplay={autoplay ? (typeof autoplay === 'boolean' ? { delay: 3000 } : autoplay) : false}
        navigation={navigation ? {
          prevEl: `.${styles.swiperButtonPrev}`,
          nextEl: `.${styles.swiperButtonNext}`,
        } : false}
        pagination={pagination ? { clickable: true } : false}
        effect={effect}
        speed={speed}
        breakpoints={breakpoints}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <>
          <div className={styles.swiperButtonPrev} />
          <div className={styles.swiperButtonNext} />
        </>
      )}
    </div>
  );
};

export default SwiperWrapper;

