"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/styles/home/hero.module.css";
import Image from 'next/image';

const images = [
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg',
];

export default function Slider() {
  const [ currentSlide , setcurrentSlide ] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
    setcurrentSlide(
      (currentValue) => {
        if(currentValue == images.length -1){
          return 0
        }else {
          return currentValue + 1;
        }
      }
    )
    }, 2000);
    return () => {
      clearInterval(interval);
    }

  },[])

  return (
    <div className={styles.imageSection}>
    <div className={styles.slider}>
      {images.map((image, index) => (
        <Image 
          alt={`Slider ${index + 1}`} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`} 
          src={image} 
          key={index} 
          fill 
        />
      ))}
    </div>
  </div>
  )
}
