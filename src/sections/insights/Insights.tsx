'use client';

import TitleText from '@/components/customTexts/TitleText';
import TypingText from '@/components/customTexts/TypingText';
import InsightCard from '@/components/insightCard/InsightCard';
import { insights } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

const Insights = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.1,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[40px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  )
}

export default Insights