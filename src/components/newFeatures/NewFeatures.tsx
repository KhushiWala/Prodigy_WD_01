import styles from '@/styles'
import Image from 'next/image'
import React from 'react'

type Props = {imgUrl:string | any ,
              title: string | undefined,
              subtitle: string | undefined,
}

const NewFeatures = ({imgUrl,title,subtitle}: Props) => {
  return (
  
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <Image src={imgUrl} alt="icon" className=" object-contain" width={24} height={24} />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>

  )
}

export default NewFeatures