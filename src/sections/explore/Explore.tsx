'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { exploreWorlds } from '@/constants';
import { staggerContainer } from '@/utils/motion';
import ExploreCard from '@/components/exploreCard/ExploreCard';
import TitleText from '@/components/customTexts/TitleText';
import TypingText from '@/components/customTexts/TypingText';



interface Props {}

const Explore: React.FC<Props> = () => {
  const [active, setActive] = useState(2);

  const handleClick = (id: number) => {
    setActive(id); // Update active ID on click
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(0.1,0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<p>Choose the world you want <br className="md:block hidden" /> to explore</p>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}             />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
