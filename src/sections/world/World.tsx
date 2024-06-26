'use client';

import map from '@/assets/map.png'
import people1 from '@/assets/people-01.png'
import people2 from '@/assets/people-02.png'
import people3 from '@/assets/people-03.png'

import TitleText from '@/components/customTexts/TitleText';
import TypingText from '@/components/customTexts/TypingText';
import styles from '@/styles';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

type Props = {}

function World({}: Props) {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src={map} alt={'map'} className='w-full h-full object-cover'/>

        <div className="absolute top-28 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people1} alt={'people'} className='w-full h-full '/>
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people2} alt={'people'} className='w-full h-full '/>
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image src={people3} alt={'people'} className='w-full h-full '/>
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default World
