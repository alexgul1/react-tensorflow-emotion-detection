import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

import useRealTimeFaceDetector from '../../hooks/useRealTimeFaceDetector';
import BoundingBoxes from '../BoundingBoxes/BoundingBoxes';
import MainLayout from "../../layouts/MainLayout/MainLayout";

import styles from './WebcamAnalyzer.scss';

const WebcamAnalyzer = () => {
  const webcamRef = useRef(null);

  const { predictions } = useRealTimeFaceDetector(webcamRef);

  useEffect(() => {
    if (webcamRef?.current?.video) {
      // Set video height and width
      webcamRef.current.video.width = webcamRef.current.video.videoWidth;
      webcamRef.current.video.height = webcamRef.current.video.videoHeight;
    }
  }, [webcamRef?.current?.video]);

  return (
    <MainLayout>
      <Webcam
        audio={false}
        ref={webcamRef}
        className={styles['webcam-wrapper']}
      />
      <BoundingBoxes
        predictions={predictions}
        width={webcamRef?.current?.video?.videoWidth}
        height={webcamRef?.current?.video.videoHeight}
      />
    </MainLayout>
  );
};

export default WebcamAnalyzer;
