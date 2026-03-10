/**
 * Button Component
 * Универсальный компонент кнопки с поддержкой различных вариантов стилей
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'header';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  saleMark?: string;
  formType?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  saleMark,
  formType,
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
      data-form-type={formType}
    >
      {children}
      {saleMark && <span className={styles.saleMark}>{saleMark}</span>}
    </motion.button>
  );
};

export default Button;

