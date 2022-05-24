import { useContext, useEffect, useState } from 'react';

import debounce from 'utils/debounce';
import { ModelContext } from 'contexts/modelStatus.context';

const useRealTimeFaceDetector = (webcamRef) => {
  const returnTensors = false;
  let interval;
  const { model, isModelLoaded } = useContext(ModelContext);

  const [predictions, setPredictions] = useState(null);

  const detectFace = async () => {
    if (model && webcamRef?.current?.video?.readyState === 4) {
      // Get video
      const { video } = webcamRef.current;

      const prediction = await model.estimateFaces(video, returnTensors);

      setPredictions(prediction);
    }
  };

  useEffect(() => {
    if (isModelLoaded && !interval) {
      interval = setInterval(() => {
        debounce(detectFace(), 100);
      }, 100);
    }
  }, [isModelLoaded]);

  return {
    predictions,
  };
};

export default useRealTimeFaceDetector;
