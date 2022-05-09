/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import useRealTimeFaceDetector from '../../hooks/useRealTimeFaceDetector';
import BoundingBoxes from '../BoundingBoxes/BoundingBoxes';
import MainLayout from '../../layouts/MainLayout/MainLayout';

import styles from './WebcamAnalyzer.scss';

const WebcamAnalyzer = () => {
  const [isCameraActive, setCameraActive] = useState(false);
  const containerRef = useRef(null);
  const webcamRef = useRef(null);

  const { predictions } = useRealTimeFaceDetector(webcamRef);

  useEffect(() => {
    if (webcamRef?.current?.video) {
      // Set video height and width
      webcamRef.current.video.width = containerRef?.current?.clientWidth;
      webcamRef.current.video.height = containerRef?.current?.clientHeight;
    }
  }, [webcamRef?.current, containerRef?.current]);

  const t =  () => {
    setCameraActive((value) => !value);
  };


  return (
    <MainLayout>
      <div className={styles.container}>
        <button onClick={t}>toggle</button>

        <div className={styles['webcam-container']} ref={containerRef}>
          {isCameraActive && (
            <Webcam
              audio={false}
              ref={webcamRef}
              className={styles['webcam-wrapper']}
              videoConstraints={{
                width: containerRef?.current?.clientWidth,
                height: containerRef?.current?.clientHeight,
                facingMode: 'user',
                aspectRatio:
                  containerRef?.current?.clientWidth /
                  containerRef?.current?.clientHeight,
              }}
            />
          )}
          <BoundingBoxes
            predictions={predictions}
            width={webcamRef?.current?.video.videoWidth}
            height={webcamRef?.current?.video.videoHeight}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default WebcamAnalyzer;
