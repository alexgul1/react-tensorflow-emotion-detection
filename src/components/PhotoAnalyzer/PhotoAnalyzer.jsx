import React, { useCallback, useRef, useState } from 'react';

import { getBase64, beforeUpload } from 'utils/photoUpload';
import useFaceDetector from 'hooks/useFaceDetector';
import BoundingBoxes from 'components/BoundingBoxes/BoundingBoxes';

import downloadIcon from 'assets/download.svg';

import styles from './PhotoAnalyzer.scss';

const PhotoAnalyzer = () => {
  const [isLoading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const photoRef = useRef(null);

  const { predictions } = useFaceDetector(photoRef, imageUrl);

  const onImageUpload = useCallback((info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (localImageUrl) => {
        setLoading(false);
        setImageUrl(localImageUrl);
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Upload a photo</div>

      <div className={styles['file-wrapper']}>
        <img src={downloadIcon} alt="icon" />
        <div className={styles.description}>
          <span>Click or drag file</span> to this area to upload
        </div>
      </div>
    </div>
  );
};

export default PhotoAnalyzer;
