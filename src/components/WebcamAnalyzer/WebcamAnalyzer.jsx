/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Switch from 'react-switch';

import useRealTimeFaceDetector from 'hooks/useRealTimeFaceDetector';
import BoundingBoxes from 'components/BoundingBoxes/BoundingBoxes';

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

  const t = () => {
    setCameraActive((value) => !value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Webcam</div>
      <div className={styles['toggle-container']}>
        <span className={styles['toggle-title']}>Camera on/off</span>
        <Switch
          checked={isCameraActive}
          onChange={t}
          onColor="#8C30F5"
          offColor="#9FA3AC"
          handleDiameter={18}
          height={22}
          width={44}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>

      <div className={styles['webcam-container']} ref={containerRef}>
        {isCameraActive ? (
          <>
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
            <BoundingBoxes
              predictions={predictions}
              width={webcamRef?.current?.video.videoWidth}
              height={webcamRef?.current?.video.videoHeight}
            />
          </>
        ) : (
          <div className={styles['webcam-plug']}>
            <div className={styles.description}>
              Please allow FaceReader to access your camera and
              turn on toggle
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamAnalyzer;
