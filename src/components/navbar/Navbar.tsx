'use client';

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants } from "@/utils/motion";
import search from "@/assets/search.svg";
import menu from "@/assets/menu.svg";


const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-10 relative`}
  >
    <div className="absolute w-[50%] inset-0  blur-[225px] gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <Image
        src={search}
        alt="search"
        className="object-contain"
        height={ 28 }
        width={ 28 }
      />
      <h2 className="font-extrabold text-3xl leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <Image
        src={menu}
        alt="menu"
        className=" object-contain"
        height={28}
        width={28}
      />
    </div>
  </motion.nav>
  )
}

export default Navbar