import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from 'config/routes';

import logo from 'assets/logo.svg';
import githubIcon from 'assets/github.svg';
import mapIcon from 'assets/map.svg';
import websiteIcon from 'assets/website.svg';

import styles from './Footer.scss';

const Footer = () => (
  <div className={styles.wrapper}>
    <div>
      <div className={styles['logo-wrapper']}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p>FaceReader</p>
      </div>
      <div className={styles.copyright}>
        <span>Copyright © 2022 Sasha Hulitskyi</span>
        <span>All rights reserved</span>
      </div>
    </div>
    <div>
      <div className={styles.title}>Menu</div>
      <div className={styles.menu}>
        <a href={`${ROUTES.HOME}#author`} className={styles['menu-item']}>
          Author
        </a>
        <Link to={ROUTES.PHOTO_ANALYZER} className={styles['menu-item']}>
          Upload a photo
        </Link>
        <a href={`${ROUTES.HOME}#how-it-works`} className={styles['menu-item']}>
          How it works
        </a>
        <Link to={ROUTES.WEBCAM_ANALYZER} className={styles['menu-item']}>
          Webcam
        </Link>
      </div>
    </div>
    <div>
      <div className={styles.title}>Contact us</div>
      <div className={styles.links}>
        <div className={styles['link-item']}>
          <img className={styles['link-icon']} src={mapIcon} alt="link-item" />
          <a
            href="https://goo.gl/maps/3Yqq2TRZqdGKgimg8"
            target="_blank"
            rel="noreferrer"
          >
            Taras Shevchenko National University of Kyiv Volodymyrska St, 60,
            Kyiv, 01033
          </a>
        </div>
        <div className={styles['link-item']}>
          <img
            className={styles['link-icon']}
            src={websiteIcon}
            alt="link-item"
          />
          <span>
            Website:{' '}
            <a href="https://www.knu.ua" target="_blank" rel="noreferrer">
              https://www.knu.ua
            </a>
          </span>
        </div>

        <div className={styles['link-item']}>
          <img
            className={styles['link-icon']}
            src={githubIcon}
            alt="link-item"
          />
          <span>
            Github:{' '}
            <a
              href="https://github.com/alexgul1"
              target="_blank"
              rel="noreferrer"
            >
              alexgul1
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
