import React from 'react';
import { Helmet } from "react-helmet";

import MainLayout from "layouts/MainLayout/MainLayout";
import WebcamAnalyzer from "components/WebcamAnalyzer/WebcamAnalyzer";

const WebcamAnalyzerPage = () => (
  <MainLayout>
    <Helmet>
      <title>Webcam | FaceReader</title>
    </Helmet>
    <WebcamAnalyzer />
  </MainLayout>
)

export default WebcamAnalyzerPage;
