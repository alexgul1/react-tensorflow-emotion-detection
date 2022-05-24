import React from 'react';
import classNames from 'classnames';

import styles from './Button.scss';

const Button = ({ className, title, onClick }) => (
  <input
    className={classNames(styles.wrapper, className)}
    onClick={onClick}
    type="button"
    value={title}
  />
);

export default Button;
