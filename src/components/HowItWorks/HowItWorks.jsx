import React from 'react';

import styles from './HowItWorks.scss';

const explanationList = [
  {
    index: '01',
    title: 'Face detection',
    description:
      'The camera detects and locates the image of a face, either alone or in a crowd',
  },
  {
    index: '02',
    title: 'Face analysis',
    description: 'Next, an image of the face is captured and analyzed',
  },
  {
    index: '03',
    title: 'Converting the image to data',
    description:
      "The face capture process transforms analog information (a face) into a set of digital information (data) based on the person's facial features",
  },
  {
    index: '04',
    title: 'Finding a match',
    description:
      'Your faceprint is then compared against a database of other known faces',
  },
];

const HowItWorks = () => (
  <div className={styles.wrapper} id="how-it-works">
    <div className={styles.title}>How it works</div>
    <div className={styles.list}>
      {explanationList.map(({ index, title, description }) => (
        <div className={styles['list-item']} key={index}>
          <div className={styles['item-number']}>
            <span>{index}</span>
          </div>
          <div className={styles['item-title']}>{title}</div>
          <div className={styles['item-description']}>{description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
