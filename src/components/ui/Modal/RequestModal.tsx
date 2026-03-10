/**
 * RequestModal Component
 * Модальное окно для отправки заявки
 */

import React, { useEffect } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/modalSlice";
import {
  submitFormStart,
  submitFormSuccess,
  submitFormError,
  resetFormState,
} from "@/store/slices/formSlice";
import { submitFormData } from "@/services/formService";
import styles from "./RequestModal.module.scss";

// Типы для данных формы
interface FormData {
  name: string;
  phone: string;
  contactMethod: string;
  comment?: string;
}

// Схема валидации
const schema = yup.object({
  name: yup.string().required("Имя обязательно"),
  phone: yup.string().required("Телефон обязателен"),
  contactMethod: yup.string().required("Выберите способ связи"),
  comment: yup.string().optional(),
});

export const RequestModal: React.FC = () => {
  const dispatch = useAppDispatch();

  // Получаем состояние модалки с данными
  const { isOpen, modalType, modalData } = useAppSelector(
    (state) => state.modal
  );

  // Получаем состояние формы
  const { isSubmitting, submitError, submitSuccess } = useAppSelector(
    (state) => state.form
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
      name: "",
      phone: "",
      contactMethod: "Phone",
      comment: "",
    },
  });

  // Блокируем скролл body при открытой модалке
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "10px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Сброс состояния при открытии/закрытии модалки
  useEffect(() => {
    if (isOpen && modalType === "request") {
      reset();
      dispatch(resetFormState());
    }
  }, [isOpen, modalType, reset, dispatch]);

  // Определяем заголовок в зависимости от типа формы
  const getTitle = (): string => {
    if (!modalData) return "Оставить заявку";

    const { formType } = modalData;

    switch (formType) {
      case "sale":
        return "Получить скидку";
      case "same":
        return "Хочу так же";
      case "middle":
        return "Оставить заявку";
      case "last":
        return "Бесплатный аудит";
      case "new":
      case "market":
      case "mobapp":
      case "corp":
      case "digital":
        return "Подробная консультация";
      default:
        return "Оставить заявку";
    }
  };

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    dispatch(submitFormStart());

    try {
      // Подготовка данных для отправки
      const formPayload = {
        name: data.name,
        phone: data.phone,
        contactMethod: data.contactMethod,
        comment: data.comment || "",
        source: modalData?.source || "unknown",
        formType: modalData?.formType || "default",
      };

      await submitFormData(formPayload);

      dispatch(submitFormSuccess());

      // Пауза перед закрытием для показа сообщения
      setTimeout(() => {
        dispatch(closeModal());
        reset();
        // Редирект на страницу успеха
        window.location.href = "/success";
      }, 1500);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";

      dispatch(submitFormError(errorMessage));

      // Через 3 секунды редирект на страницу ошибки
      setTimeout(() => {
        window.location.href = "/error";
      }, 3000);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      dispatch(closeModal());
      reset();
      dispatch(resetFormState());
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && modalType === "request" && (
        <>
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
          />

          <div className={styles.modal} onClick={handleBackdropClick}>
            <motion.div
              className={styles.modalDialog}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalContent}>
                <button
                  type="button"
                  className={styles.close}
                  onClick={handleClose}
                  disabled={isSubmitting}
                  aria-label="Закрыть"
                >
                  <svg
                    className={styles.svgD}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 19L1.00037 1"
                      stroke="white"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 19L18.9996 1"
                      stroke="white"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className={styles.svgM}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 13L1.00025 1"
                      stroke="white"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 13L12.9998 1"
                      stroke="white"
                      strokeWidth="1.63636"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className={styles.mainForm}>
                  <div className={styles.title}>{getTitle()}</div>

                  <div className={styles.formCont}>
                    <form
                      className={styles.form}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className={styles.inLabel}>Имя</div>
                      <input
                        type="text"
                        placeholder="Например, Кирилл"
                        id="FormInputName"
                        {...register("name")}
                        disabled={isSubmitting}
                        className={`${styles.input} ${
                          errors.name ? styles.error : ""
                        }`}
                      />
                      {errors.name && (
                        <span className={styles.errorText}>
                          {errors.name.message}
                        </span>
                      )}

                      <div className={styles.inLabel}>Номер телефона</div>
                      <input
                        type="tel"
                        placeholder="+7 ___-__-__"
                        id="FormInputTel"
                        {...register("phone")}
                        disabled={isSubmitting}
                        className={`${styles.input} TelRu ${
                          errors.phone ? styles.error : ""
                        }`}
                      />
                      {errors.phone && (
                        <span className={styles.errorText}>
                          {errors.phone.message}
                        </span>
                      )}

                      <div className={styles.inLabel}>
                        Как лучше с вами связаться?
                      </div>
                      <div className={styles.socCont}>
                        <label className={styles.socLabel}>
                          <input
                            type="radio"
                            value="Phone"
                            {...register("contactMethod")}
                            disabled={isSubmitting}
                          />
                          <div>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.3342 14.2139L15.0564 12.491C15.2883 12.2618 15.5818 12.1049 15.9012 12.0394C16.2205 11.9739 16.552 12.0025 16.8555 12.1218L18.9544 12.9602C19.261 13.0847 19.5239 13.2972 19.71 13.5709C19.8961 13.8447 19.997 14.1674 20 14.4985V18.3442C19.9982 18.5694 19.9509 18.7919 19.8609 18.9983C19.7709 19.2047 19.6401 19.3908 19.4763 19.5453C19.3125 19.6998 19.1192 19.8195 18.9079 19.8973C18.6967 19.9751 18.4719 20.0093 18.2471 19.9979C3.5392 19.0826 0.57149 6.62239 0.010239 1.85368C-0.0158147 1.6195 0.00798984 1.38246 0.0800864 1.15814C0.152183 0.933831 0.270938 0.727331 0.428538 0.55223C0.586138 0.377128 0.779012 0.237394 0.994471 0.142219C1.20993 0.0470438 1.44309 -0.00141458 1.67862 3.14343e-05H5.3921C5.72347 0.0010127 6.04698 0.101149 6.321 0.287561C6.59503 0.473973 6.80704 0.738135 6.92977 1.04607L7.7678 3.14584C7.89101 3.44817 7.92245 3.78011 7.85818 4.10021C7.79391 4.4203 7.63679 4.71436 7.40645 4.94565L5.68426 6.66854C5.68426 6.66854 6.67606 13.3832 13.3342 14.2139Z"
                                fill="#3360FF"
                              />
                            </svg>
                          </div>
                        </label>

                        <label className={styles.socLabel}>
                          <input
                            type="radio"
                            value="Telegram"
                            {...register("contactMethod")}
                            disabled={isSubmitting}
                          />
                          <div>
                            <svg
                              width="21"
                              height="18"
                              viewBox="0 0 21 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.1173 1.85585L17.0991 16.2824C16.8713 17.3004 16.2776 17.5539 15.434 17.0745L10.8349 13.6397L8.6161 15.8031C8.37036 16.0522 8.16533 16.26 7.69171 16.26L8.02246 11.5132L16.5455 3.70723C16.9163 3.37272 16.4648 3.18664 15.9697 3.52187L5.4329 10.2468L0.896706 8.8074C-0.0898278 8.49534 -0.107687 7.80749 1.10244 7.32745L18.845 0.399072C19.6666 0.0870087 20.3852 0.584427 20.1173 1.85657V1.85585Z"
                                fill="#3FADEB"
                              />
                            </svg>
                          </div>
                        </label>

                        <label className={styles.socLabel}>
                          <input
                            type="radio"
                            value="WhatsApp"
                            {...register("contactMethod")}
                            disabled={isSubmitting}
                          />
                          <div>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.00401338 20L1.35601 15.032C0.465151 13.5048 -0.00289063 11.768 1.34322e-05 9.99999C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 9.99999C20 15.523 15.523 20 10 20C8.23279 20.0028 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26187 5.31601 6.13568 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.42299 4.89662 7.01341 4.90001 7.62C4.90201 8.10999 5.03001 8.58699 5.23001 9.03299C5.63901 9.93499 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1052 14.506 13.3896 14.4271 13.647 14.29C13.778 14.2225 13.9058 14.1491 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2753 12.2519 11.2098 12.275C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9408 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45623 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88872 9.95801 7.60501 9.49299L7.54601 9.39799C7.50363 9.33416 7.46937 9.2653 7.44401 9.19299C7.40601 9.04599 7.50501 8.92799 7.50501 8.92799C7.50501 8.92799 7.74801 8.66199 7.86101 8.51799C7.9551 8.39832 8.04288 8.27381 8.12401 8.14499C8.24201 7.955 8.27901 7.75999 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29632 6.52514 5.29766 6.39101 5.307V5.308Z"
                                fill="#34BC41"
                              />
                            </svg>
                          </div>
                        </label>
                      </div>
                      {errors.contactMethod && (
                        <span className={styles.errorText}>
                          {errors.contactMethod.message}
                        </span>
                      )}

                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Отправка..." : "Оставить заявку"}
                      </button>

                      {submitError && (
                        <div
                          className={`${styles.alert} ${styles.alertDanger}`}
                        >
                          Ошибка: {submitError}
                        </div>
                      )}

                      {submitSuccess && (
                        <div
                          className={`${styles.alert} ${styles.alertSuccess}`}
                        >
                          Заявка успешно отправлена! Перенаправляем на страницу
                          подтверждения...
                        </div>
                      )}
                    </form>

                    <img
                      src="/img/modal-img.png"
                      alt="оставить заявку"
                      className={styles.modalImg}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RequestModal;
