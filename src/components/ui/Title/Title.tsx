import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import styles from './Title.module.scss';

export interface TitleProps extends MotionProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  fontSizeEm?: string;
  marginBottom?: number;
  marginBottomEm?: string;
  spanColor?: string;
  style?: React.CSSProperties;
  align?: 'left' | 'center' | 'right';
  id?: string;
}

const motionComponents = {
  1: motion.h1,
  2: motion.h2,
  3: motion.h3,
  4: motion.h4,
  5: motion.h5,
  6: motion.h6,
};

export const Title: React.FC<TitleProps> = (props) => {
  const {
    level = 1,
    children,
    className = '',
    fontSize,
    color = '#1a1a1a',
    fontWeight = 500,
    fontSizeEm,
    marginBottom,
    marginBottomEm,
    spanColor,
    style,
    align = 'left',
    id,
    initial = { opacity: 0, y: -50 },
    animate = { opacity: 1, y: 0 },
    transition = { duration: 0.2 },
    ...motionProps
  } = props;

  const combinedStyle: React.CSSProperties = {
    ...style,
    fontSize: fontSizeEm || `${fontSize}px`,
    fontWeight,
    color,
    marginBottom: marginBottomEm || `${marginBottom}px`,
    textAlign: align,
    ...(spanColor ? { '--span-color': spanColor } as React.CSSProperties : {}),
  };

  const titleClasses = [
    styles.title,
    styles[`level${level}`],
    className
  ].filter(Boolean).join(' ');

  const MotionComponent = motionComponents[level];

  return (
    <MotionComponent
      className={titleClasses}
      style={combinedStyle}
      id={id}
      initial={initial}
      animate={animate}
      transition={transition}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};


export default Title;