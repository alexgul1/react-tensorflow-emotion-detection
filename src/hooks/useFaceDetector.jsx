import { useContext, useEffect, useState } from 'react';

import { ModelContext } from 'contexts/modelStatus.context';

const useFaceDetector = (photoRef) => {
  const returnTensors = false;

  const { model, isModelLoaded } = useContext(ModelContext);

  const [predictions, setPredictions] = useState(null);

  const detectFace = async () => {
    if (model && photoRef?.current) {
      const prediction = await model.estimateFaces(
        photoRef?.current,
        returnTensors,
      );

      setPredictions(prediction);
    }
  };

  useEffect(() => {
    if (isModelLoaded) {
      setTimeout(detectFace, 10);
    }
  }, [isModelLoaded, photoRef]);

  return {
    predictions,
  };
};

export default useFaceDetector;
