import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import ROUTES from 'config/routes';

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
            <p>face detection</p>
          </div>
          <div className={styles.description}>
            The purpose of the work is to create a system that accepts visual
            data of various formats and recognizes faces on them
          </div>
          <Link to={ROUTES.WEBCAM_ANALYZER}>
            <Button className={styles.button} title="Get Started" />
          </Link>
        </div>
      </div>
      <img className={styles.img} src={creativeBanner} alt="creative" />
    </div>
  );
};

export default MainBanner;
