import React from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string | any;
  textStyles?: string | any; // Optional text styles for customization
  
}

const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => {
  return (
    <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-white ${textStyles}`}
  >
    {Array.from(title).map((letter:any, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
  );
};

export default TypingText;
