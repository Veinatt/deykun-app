/**
 * CaseStudySection Component
 * Секция с кейсом о повышении продаж
 */

import React from "react";
import { motion } from "framer-motion";
import { Button, Title } from "@/components/ui";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/slices/modalSlice";
import styles from "./CaseStudySection.module.scss";

export interface CaseStudySectionProps {
  profit?: string;
  title?: string;
  buttonText?: string;
  linkText?: string;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  profit = "110 000 000 ₽",
  title = "Недавно мы повысили продажи строительной компании",
  buttonText = "Хочу так же",
  linkText = "Читать кейс",
}) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: "request",
        data: {
          source: "case_study",
          formType: "same",
        },
      })
    );
  };

  return (
    <section className={styles.deykunSec3New}>
      {/* Декоративные изображения */}
      <img
        src="/img/sec-3-1.png"
        alt="кейс по сайту"
        className={styles.sec31}
      />
      <img
        src="/img/sec-3-2.png"
        alt="кейс по сайту"
        className={styles.sec32}
      />

      {/* Заголовок */}
      <Title level={1} className={styles.secTitle} align="center">
        {title} <span>на {profit}</span>
      </Title>

      {/* Кнопка */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Button
          variant="primary"
          onClick={handleOpenModal}
          formType="sale"
          className={`${styles.reqBtn} `}
        >
          {buttonText}
        </Button>
      </motion.div>

      {/* Ссылка на кейс с анимированным подчеркиванием */}
      <motion.a
        href="#port"
        className={styles.readCase}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {linkText}
      </motion.a>
    </section>
  );
};

export default CaseStudySection;
