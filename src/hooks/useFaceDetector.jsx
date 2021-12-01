import { useEffect, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';

import debounce from '../utils/debounce';

const useFaceDetector = (webcamRef) => {
  const returnTensors = false;
  let model;

  const [predictions, setPredictions] = useState(null);

  const detectFace = async () => {
    if (model && webcamRef?.current?.video?.readyState === 4) {
      // Get video
      const { video } = webcamRef.current;

      const prediction = await model.estimateFaces(video, returnTensors);

      setPredictions(prediction);
    }
  };

  const requestModel = async () => {
    model = await blazeface.load();

    setInterval(() => {
      debounce(detectFace(), 100);
    }, 100);
  };

  useEffect(() => {
    requestModel();
  }, []);

  return {
    predictions,
  };
};

export default useFaceDetector;
