import React, { useEffect, useRef } from 'react';

import styles from './BoundingBoxes.scss';

const BoundingBoxes = ({ predictions, width, height }) => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    if (predictions?.length > 0 && canvasRef?.current) {
      predictions.forEach(({ topLeft, bottomRight }) => {
        const [firstStartPoint, secondStartPoint] = topLeft;
        const [firstEndPoint, secondEndPoint] = bottomRight;
        const size = [
          firstEndPoint - firstStartPoint,
          secondEndPoint - secondStartPoint,
        ];

        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = 'red';
        ctx.rect(firstStartPoint, secondStartPoint, ...size);
        ctx.stroke();
      });
    }
  };

  useEffect(() => {
    draw();
  }, [predictions, canvasRef]);

  useEffect(() => {
    if (canvasRef && width && height) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }
  }, [width, height]);

  return <canvas ref={canvasRef} className={styles.wrapper} />;
};

export default BoundingBoxes;
