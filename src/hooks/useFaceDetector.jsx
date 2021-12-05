import { useContext, useEffect, useState } from 'react';
import { ModelContext } from '../contexts/modelStatus.context';

const useFaceDetector = (photoRef, imageUrl) => {
  const returnTensors = false;

  const { model, requestModel, isModelLoaded } = useContext(ModelContext);

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
    if (!isModelLoaded) {
      requestModel();
    }
  }, []);

  useEffect(() => {
    detectFace();
  }, [imageUrl]);

  return {
    predictions,
  };
};

export default useFaceDetector;
