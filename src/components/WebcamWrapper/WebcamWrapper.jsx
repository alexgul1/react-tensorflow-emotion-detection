import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

import useFaceDetector from '../../hooks/useFaceDetector';
import PredictionRectangle from '../PredictionRectangle/PredictionRectangle';

import styles from './WebcamWrapper.scss';

const WebcamWrapper = () => {
  const webcamRef = useRef(null);

  const { predictions } = useFaceDetector(webcamRef);

  useEffect(() => {
    if (webcamRef?.current?.video) {
      // Set video height and width
      webcamRef.current.video.width = webcamRef.current.video.videoWidth;
      webcamRef.current.video.height = webcamRef.current.video.videoHeight;
    }
  }, [webcamRef?.current?.video]);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} className={styles.test} />
      <PredictionRectangle
        predictions={predictions}
        width={webcamRef?.current?.video?.width}
        height={webcamRef?.current?.video.videoHeight}
      />
    </div>
  );
};

export default WebcamWrapper;
