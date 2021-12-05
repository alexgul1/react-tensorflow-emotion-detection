import React, { useEffect, useMemo, useState } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';

export const ModelContext = React.createContext({
  isModelLoaded: undefined,
  model: undefined,
  requestModel: Function.prototype,
});

const ModelStatusProvider = ({ children }) => {
  const [isModelLoaded, setModelStatus] = useState(false);
  const [model, setModel] = useState(undefined);

  const requestModel = async () => {
    if (!isModelLoaded || !model) {
      const requiredModel = await blazeface.load();

      setModel(requiredModel);
      setModelStatus(true);
    }
  };

  const modelValue = useMemo(
    () => ({ model, requestModel, isModelLoaded }),
    [model, isModelLoaded],
  );

  return (
    <ModelContext.Provider value={modelValue}>{children}</ModelContext.Provider>
  );
};

export default ModelStatusProvider;
