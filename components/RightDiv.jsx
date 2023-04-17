import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../src/styles/RightDiv.module.css';
import basket from '/public/pastillesPics/basketball.png'
import football from '/public/pastillesPics/football.jpg'
import music from '/public/pastillesPics/music.jpg'
import politics from '/public/pastillesPics/politics.png'
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function RightDiv() {
  return <>
    <div className={styles.maincontainer}>

      <div className={styles.card}>
        <h4 className={styles.banner}>Trending Topics</h4>
        <Carousel>

          <Carousel.Item interval={4000}>
            <Image src={basket} alt='basketball logo' className={styles.topcards} />
            <Carousel.Caption>
              <h3 className={styles.title}>Basketball</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <Image src={football} alt='football logo' className={styles.topcards} />
            <Carousel.Caption>
              <h3 className={styles.title}>Football</h3>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item interval={4000}>
            <Image src={music} alt='music logo' className={styles.topcards} />
            <Carousel.Caption>
              <h3 className={styles.title}>Music</h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item interval={4000}>
            <Image src={politics} alt='politics logo' className={styles.topcards} />
            <Carousel.Caption>
              <h3 className={styles.title}>Politics</h3>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  </>


}  