/**
 * HeroSection Component
 * Главный экран лендинга с заголовком, описанием и CTA кнопкой
 */

import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/slices/modalSlice";
import { Button, Title } from "@/components/ui";
import type { HeroContent } from "@/types";
import styles from "./HeroSection.module.scss";

export interface HeroSectionProps {
  content?: HeroContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: "request",
        data: {
          source: "hero",
          formType: "sale",
        },
      })
    );
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("sec_2");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Моковые данные, если контент не передан
  const heroData = content || {
    id: "1",
    title: "Маркетинг - который даст результат",
    subtitle:
      "Если мы занимаемся продвижением, то мы постоянно улучшаем и дорабатываем механики, подход, чтобы улучшить результат.",
    description: "",
    button_text: "Получить скидку",
    sale_mark: "45% до 20 апреля",
    points: [
      { id: "1", text: "Сайты для бизнеса", order: 1 },
      { id: "2", text: "Маркетинговая проработка", order: 2 },
      { id: "3", text: "Время разработки до 2-3 недель", order: 3 },
    ],
  };

  // Определяем иконки для каждого пункта
  const pointIcons = [
    <svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.0775 7.3125C8.23875 7.3125 9.75 5.80282 9.75 3.63266C9.75 1.4625 8.23875 0 6.0775 0H1.92969C1.76142 0 1.625 0.136424 1.625 0.304688V5.5512H0.304688C0.136424 5.5512 0 5.68763 0 5.85589V7.00781C0 7.17608 0.136424 7.3125 0.304688 7.3125H1.625V8.125H0.304688C0.136424 8.125 0 8.26142 0 8.42969V9.44531C0 9.61358 0.136424 9.75 0.304688 9.75H1.625V11.0703C1.625 11.2386 1.76142 11.375 1.92969 11.375H3.41656C3.58483 11.375 3.72125 11.2386 3.72125 11.0703V9.75H7.82031C7.98858 9.75 8.125 9.61358 8.125 9.44531V8.42969C8.125 8.26142 7.98858 8.125 7.82031 8.125H3.72125V7.3125H6.0775ZM3.72125 1.74555H5.72C6.90625 1.74555 7.62125 2.48468 7.62125 3.63266C7.62125 4.79637 6.90625 5.5512 5.6875 5.5512H3.72125V1.74555Z"
        fill="#FBFBFB"
      />
    </svg>,
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.8858 2.38726C10.2373 2.03577 10.2373 1.46511 9.8858 1.11362C9.53431 0.762127 8.96364 0.762128 8.61215 1.11362L8.71822 1.21968L8.61215 1.11362L1.11362 8.61215C0.762128 8.96364 0.762127 9.53431 1.11362 9.8858C1.46511 10.2373 2.03577 10.2373 2.38726 9.8858L9.8858 2.38726ZM4.15117 2.50146C4.15117 2.06393 3.97736 1.64433 3.66798 1.33495C3.3586 1.02557 2.93899 0.851757 2.50146 0.851757C2.06393 0.851757 1.64433 1.02557 1.33495 1.33495C1.02557 1.64433 0.851757 2.06393 0.851757 2.50146C0.851757 2.93899 1.02557 3.3586 1.33495 3.66798C1.64433 3.97736 2.06393 4.15117 2.50146 4.15117C2.93899 4.15117 3.3586 3.97736 3.66798 3.66798C3.97736 3.3586 4.15117 2.93899 4.15117 2.50146ZM10.15 8.50029C10.15 8.06276 9.97619 7.64315 9.66681 7.33377C9.35743 7.02439 8.93782 6.85059 8.50029 6.85059C8.06276 6.85059 7.64315 7.02439 7.33377 7.33377C7.02439 7.64315 6.85059 8.06276 6.85059 8.50029C6.85059 8.93782 7.02439 9.35743 7.33377 9.66681C7.64315 9.97619 8.06276 10.15 8.50029 10.15C8.93782 10.15 9.35743 9.97619 9.66681 9.66681C9.97619 9.35743 10.15 8.93782 10.15 8.50029Z"
        fill="#FBFBFB"
        stroke="#FBFBFB"
        strokeWidth="0.3"
      />
    </svg>,
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.8858 2.38726C10.2373 2.03577 10.2373 1.46511 9.8858 1.11362C9.53431 0.762127 8.96364 0.762128 8.61215 1.11362L8.71822 1.21968L8.61215 1.11362L1.11362 8.61215C0.762128 8.96364 0.762127 9.53431 1.11362 9.8858C1.46511 10.2373 2.03577 10.2373 2.38726 9.8858L9.8858 2.38726ZM4.15117 2.50146C4.15117 2.06393 3.97736 1.64433 3.66798 1.33495C3.3586 1.02557 2.93899 0.851757 2.50146 0.851757C2.06393 0.851757 1.64433 1.02557 1.33495 1.33495C1.02557 1.64433 0.851757 2.06393 0.851757 2.50146C0.851757 2.93899 1.02557 3.3586 1.33495 3.66798C1.64433 3.97736 2.06393 4.15117 2.50146 4.15117C2.93899 4.15117 3.3586 3.97736 3.66798 3.66798C3.97736 3.3586 4.15117 2.93899 4.15117 2.50146ZM10.15 8.50029C10.15 8.06276 9.97619 7.64315 9.66681 7.33377C9.35743 7.02439 8.93782 6.85059 8.50029 6.85059C8.06276 6.85059 7.64315 7.02439 7.33377 7.33377C7.02439 7.64315 6.85059 8.06276 6.85059 8.50029C6.85059 8.93782 7.02439 9.35743 7.33377 9.66681C7.64315 9.97619 8.06276 10.15 8.50029 10.15C8.93782 10.15 9.35743 9.97619 9.66681 9.66681C9.97619 9.35743 10.15 8.93782 10.15 8.50029Z"
        fill="#FBFBFB"
        stroke="#FBFBFB"
        strokeWidth="0.3"
      />
    </svg>,
  ];

  return (
    <section className={styles.heroSection}>
      <motion.a
        href="#sec_2"
        className={styles.goToSec2}
        onClick={(e) => {
          e.preventDefault();
          scrollToNext();
        }}
        whileHover={{ y: 5 }}
        whileTap={{ y: 0 }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 15.3536C3.84171 15.5488 4.15829 15.5488 4.35355 15.3536L7.53553 12.1716C7.7308 11.9763 7.7308 11.6597 7.53553 11.4645C7.34027 11.2692 7.02369 11.2692 6.82843 11.4645L4 14.2929L1.17157 11.4645C0.97631 11.2692 0.659728 11.2692 0.464466 11.4645C0.269203 11.6597 0.269203 11.9763 0.464466 12.1716L3.64645 15.3536ZM3.5 1L3.5 15L4.5 15L4.5 1L3.5 1Z"
            fill="#FBFBFB"
          />
        </svg>
      </motion.a>

      <img src={`${import.meta.env.BASE_URL}img/sec-1-bg.png`} alt="Фон" className={styles.heroBg} />

      <div className={`${styles.centBlock} container`}>
        <motion.div
          className={styles.pointsCont}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heroData.points.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.point}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.svgC}>{pointIcons[index]}</div>
              {point.text}
            </motion.div>
          ))}
        </motion.div>
        <Title
          level={1}
          fontSize={60}
          color="#fff"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.secTitle}
        >
          {heroData.title}
        </Title>

        <motion.div
          className={styles.subTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {heroData.subtitle}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="white"
            size="large"
            onClick={handleOpenModal}
            saleMark={heroData.sale_mark}
            formType="sale"
            className={styles.reqMain}
          >
            {heroData.button_text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
