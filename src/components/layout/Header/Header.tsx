import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/slices/modalSlice";
import { setScrolled } from "@/store/slices/uiSlice";
import { Button } from "@/components/ui";

export interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector((state) => state.ui.isScrolled);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Обработчик открытия модалки
  const handleOpenModal = () => {
    dispatch(
      openModal({
        type: "request",
        data: {
          source: "header",
          formType: "default",
        },
      })
    );
  };

  // Эффект для отслеживания скролла
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 10));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Обработчик клика по dropdown
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Закрыть dropdown при клике на ссылку
  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsDropdownOpen(false);

    if (href.startsWith("#")) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const dropdownItems = [
    { href: "#rates", label: "Тарифы" },
    { href: "#port", label: "Кейсы" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.active : ""} ${
        className || ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={`${styles.headerCont}`}>
        {/* Dropdown меню */}
        <div className={styles.dropdown} ref={dropdownRef}>
          <button
            className={styles.dropbtn}
            onClick={handleDropdownClick}
            aria-label="Меню"
            aria-expanded={isDropdownOpen}
          >
            <div>Меню</div>
            <motion.svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M1 1L7.5 8L14.5 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className={styles.dropdownContent}
                initial={{
                  opacity: 0,
                  maxHeight: 0,
                  overflow: "hidden",
                }}
                animate={{
                  opacity: 1,
                  maxHeight: 300, // Предполагаемая максимальная высота
                  overflow: "hidden",
                }}
                exit={{
                  opacity: 0,
                  maxHeight: 0,
                  overflow: "hidden",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <div className={styles.dropdownContentInner}>
                  {dropdownItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleMenuItemClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Логотип */}
        <div className={styles.logo}>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            deykun
          </Link>
        </div>
          <Button
            variant="header"
            onClick={handleOpenModal}
            formType="sale"
            className={`${styles.reqBtn} ${styles.rbH}`}
          >
          Начать проект →
          </Button>
      </div>
    </motion.header>
  );
};

export default Header;
