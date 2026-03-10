/**
 * Accordion Component
 * Компонент аккордеона для FAQ и других секций
 * Поддерживает управление через Redux или локальное состояние
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveAccordion } from '@/store/slices/uiSlice';
import styles from './Accordion.module.scss';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  useRedux?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  // allowMultiple = false,
  useRedux = true,
  className = '',
}) => {
  const dispatch = useAppDispatch();
  const activeAccordion = useAppSelector((state) => state.ui.activeAccordion);
  const [localActive, setLocalActive] = React.useState<string | null>(null);

  const currentActive = useRedux ? activeAccordion : localActive;

  const handleToggle = (id: string) => {
    if (useRedux) {
      if (activeAccordion === id) {
        dispatch(setActiveAccordion(null));
      } else {
        dispatch(setActiveAccordion(id));
      }
    } else {
      if (localActive === id) {
        setLocalActive(null);
      } else {
        setLocalActive(id);
      }
    }
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => {
        const isOpen = currentActive === item.id;

        return (
          <div key={item.id} className={styles.accordionItem}>
            <button
              className={`${styles.accordionHeader} ${isOpen ? styles.active : ''}`}
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.title}</span>
              <motion.svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M1 0.999878L7.5 7.99988L14.5 0.999878"
                  stroke="#A1A1A1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={styles.accordionContent}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

