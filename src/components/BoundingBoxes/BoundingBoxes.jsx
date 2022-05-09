import React, { useEffect, useRef } from 'react';

import styles from './BoundingBoxes.scss';

const BoundingBoxes = ({ predictions, width, height }) => {
  const canvasRef = useRef(null);

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    if (predictions?.length > 0 && canvasRef?.current) {
      predictions.forEach(({ topLeft, bottomRight, probability }) => {
        const [firstStartPoint, secondStartPoint] = topLeft;
        const [firstEndPoint, secondEndPoint] = bottomRight;
        const size = [
          firstEndPoint - firstStartPoint,
          secondEndPoint - secondStartPoint,
        ];
        const probabilityInPercent = (probability * 100).toFixed(2);

        ctx.beginPath();
        ctx.lineWidth = '2';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#FE9A22';
        ctx.setLineDash([10, 10]);
        ctx.font = '16px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(
          `${probabilityInPercent}%`,
          firstEndPoint + 5,
          secondEndPoint + 14,
        );
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
