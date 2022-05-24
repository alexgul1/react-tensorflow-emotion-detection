import React from 'react';

import userIcon from 'assets/user.png';
import quoteIcon from 'assets/quote.svg';

import styles from './Author.scss';

const Author = () => (
  <div className={styles.wrapper} id="author">
    <div className={styles['author-wrapper']}>
      <img className={styles.icon} src={userIcon} alt="user" />
      <div>
        <p className={styles.author}>Sasha Hulitskyi</p>
        <p className={styles.position}>Student</p>
      </div>
    </div>
    <div className={styles.quote}>
      <img className={styles['quote-icon']} src={quoteIcon} alt="quote" />
      The rapid development of artificial intelligence has led to the birth of
      areas such as computer vision, and with the existence of computers, it has
      always made sense to develop computer graphics. But computer vision and
      computer graphics have not always been combined. Today there are many
      products for processing images of objects that have been recognized using
      computer vision tools. But, as a rule, such products were created in
      private companies, using groups of scientists and developers who kept the
      software code confidential. But can we replicate this with existing tools
      that are freely available?
    </div>
  </div>
);

export default Author;
