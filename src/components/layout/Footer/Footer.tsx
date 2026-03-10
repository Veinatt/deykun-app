// src/components/layout/Footer/Footer.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {
  const dispatch = useAppDispatch();

  const menuItems = [
    { id: 'rates', label: 'Тарифы', href: '#rates' },
    { id: 'portfolio', label: 'Кейсы', href: '#portfolio' },
    { id: 'reviews', label: 'Отзывы', href: '#reviews' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Контакты', href: '#contact' },
  ];

  const handleOpenModal = () => {
    dispatch(openModal({ 
      type: 'request', 
      data: { 
        source: 'footer',
        formType: 'default'
      } 
    }));
  };

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        {/* Левая часть с лого и меню */}
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              deykun
            </Link>
          </div>
          
          <nav className={styles.menu} aria-label="Основная навигация">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={styles.menuLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Правая часть с кнопкой */}
        <motion.button
          type="button"
          className={styles.reqBtn}
          onClick={handleOpenModal}
          whileHover={{ scale: 1.05, backgroundColor: '#d0d9ff' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Начать проект →
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;