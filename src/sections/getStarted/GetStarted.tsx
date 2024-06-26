'use client';
import getStarted from '@/assets/get-started.png';
import TitleText from '@/components/customTexts/TitleText';
import TypingText from '@/components/customTexts/TypingText';
import StartSteps from '@/components/startSteps/StartSteps';
import { startingFeatures } from '@/constants';
import styles from '@/styles';
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {}

const GetStarted = (props: Props) => {
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
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image 
            src={getStarted} 
            alt={'get-started'} 
            className='w-[90%] h-[90%] object-contain'  
        />
       
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default GetStarted
