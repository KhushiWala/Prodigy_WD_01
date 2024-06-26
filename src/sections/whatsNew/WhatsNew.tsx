/* eslint-disable react/jsx-no-undef */
'use client';

import whatsNew from '@/assets/whats-new.png'
import TitleText from '@/components/customTexts/TitleText';
import TypingText from '@/components/customTexts/TypingText';
import NewFeatures from '@/components/newFeatures/NewFeatures';
import { newFeatures } from '@/constants';
import styles from '@/styles';
import { staggerContainer, fadeIn, planetVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

type Props = {}

const WhatsNew = (props: Props) => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What`s new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image 
              src={whatsNew} 
              alt={'what`s new Image of planet'}
              className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
  
  )
}

export default WhatsNew