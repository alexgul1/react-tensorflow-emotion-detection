import React from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import ROUTES from 'config/routes';

import logo from 'assets/logo.svg';

import styles from './Header.scss';

const getLinkClassNames = ({ isActive }) =>
  classNames(styles['menu-item'], {
    [styles.active]: isActive,
  });

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.HOME} className={styles['logo-wrapper']}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p>FaceReader</p>
      </Link>
      <div className={styles.menu}>
        <NavLink to={ROUTES.PHOTO_ANALYZER} className={getLinkClassNames}>
          Upload a photo
        </NavLink>
        <NavLink to={ROUTES.WEBCAM_ANALYZER} className={getLinkClassNames}>
          Webcam
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
