import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ModelStatusProvider from 'contexts/modelStatus.context';
import removePreloadLogic from 'utils/removePreloadLogic';
import ROUTES from 'config/routes';
import MainPage from 'pages/MainPage/MainPage';
import WebcamAnalyzerPage from 'pages/WebcamAnalyzerPage/WebcamAnalyzerPage';
import PhotoAnalyzerPage from 'pages/PhotoAnalyzerPage/PhotoAnalyzerPage';

const App = () => {
  useEffect(() => removePreloadLogic(), []);

  return (
    <ModelStatusProvider>
      <Router>
        <Routes>
          <Route
            path={ROUTES.WEBCAM_ANALYZER}
            element={<WebcamAnalyzerPage />}
          />
          <Route path={ROUTES.PHOTO_ANALYZER} element={<PhotoAnalyzerPage />} />
          <Route path={ROUTES.HOME} exact element={<MainPage />} />
        </Routes>
      </Router>
    </ModelStatusProvider>
  );
};

export default App;
