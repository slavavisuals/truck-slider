import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import truck from '../public/480x400/ford.png';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div id='clouds' className='bg-bermuda '>
        <div className='cloud x1'></div>
        <div className='cloud x2'></div>
        <div className='cloud x3'></div>
        <div className='cloud x4'></div>
        <div className='cloud x5'></div>

        <div
          ref={sliderRef}
          style={{
            backgroundImage: `url("480x400/truck.png")`,
            height: '393px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
          }}
          className='keen-slider'
        >
          <div className='keen-slider__slide  w-[300px]  number-slide1  top-0'>
            <img
              className='w-5/12 md:w-[300px]'
              src='480x400/ford.png'
              alt=''
            />
          </div>
          <div className='keen-slider__slide  number-slide2  top-0 w-[300px]'>
            <img
              className='w-5/12 md:w-[300px]'
              src='480x400/jaguar.png'
              alt=''
            />
          </div>
          <div className='keen-slider__slide  number-slide3  top-0 w-[300px]'>
            <img
              className='w-5/12 md:w-[300px]'
              src='480x400/tesla.png'
              alt=''
            />
          </div>
          <div className='keen-slider__slide  number-slide4  top-0 w-[300px]'>
            <img
              className='w-5/12 md:w-[300px]'
              src='480x400/toyota.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
