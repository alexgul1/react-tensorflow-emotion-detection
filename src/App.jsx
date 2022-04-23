import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WebcamAnalyzer from 'components/WebcamAnalyzer/WebcamAnalyzer';
import PhotoAnalyzer from 'components/PhotoAnalyzer/PhotoAnalyzer';
import ModelStatusProvider from 'contexts/modelStatus.context';

import removePreloadLogic from 'utils/removePreloadLogic';
import ROUTES from 'config/routes';
import MainPage from 'pages/MainPage/MainPage';

const App = () => {
  useEffect(() => removePreloadLogic(), []);

  return (
    <ModelStatusProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.WEBCAM_ANALYZER} element={<WebcamAnalyzer />} />
          <Route path={ROUTES.PHOTO_ANALYZER} element={<PhotoAnalyzer />} />
          <Route path={ROUTES.HOME} exact element={<MainPage />} />
        </Routes>
      </Router>
    </ModelStatusProvider>
  );
};

export default App;
