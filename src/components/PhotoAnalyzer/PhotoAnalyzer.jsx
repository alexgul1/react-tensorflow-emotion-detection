import React, { useRef } from 'react';

import useFaceDetector from 'hooks/useFaceDetector';
import BoundingBoxes from 'components/BoundingBoxes/BoundingBoxes';

import styles from './PhotoAnalyzer.scss';

const PhotoAnalyzer = ({ imageUrl }) => {
  const imageRef = useRef(null);
  const { predictions } = useFaceDetector(imageRef);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        ref={imageRef}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        alt="preview"
      />
      <BoundingBoxes
        predictions={predictions}
        width={imageRef?.current?.clientWidth}
        height={imageRef?.current?.clientHeight}
      />
    </div>
  );
};

export default PhotoAnalyzer;
