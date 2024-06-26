import React from 'react';
import { motion } from 'framer-motion';
import { textVariant2 } from '@/utils/motion'; // Assuming motion variants are defined here

interface TitleTextProps {
  title: string | any;
  textStyles?: string | any; // Optional text styles for customization
}

const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[60px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
