import React from 'react';

import Header from 'components/Header/Header';
import Button from 'components/Button/Button';

import creativeBanner from 'assets/creative.png';

import styles from './MainBanner.scss';

const MainBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <div className={styles.overview}>
          <div className={styles.title}>
            <span className={styles.colorful}>Real-Time</span>
            <p>emotion detection</p>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </div>
          <Button className={styles.button} title="Get Started" />
        </div>
      </div>
      <img className={styles.img} src={creativeBanner} alt="creative" />
    </div>
  );
};

export default MainBanner;
