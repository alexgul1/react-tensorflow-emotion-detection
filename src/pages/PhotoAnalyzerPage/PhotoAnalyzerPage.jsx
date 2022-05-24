import React from 'react';
import { Helmet } from "react-helmet";

import MainLayout from "layouts/MainLayout/MainLayout";
import PhotoAnalyzer from "components/PhotoAnalyzer/PhotoAnalyzer";

const PhotoAnalyzerPage = () => (
  <MainLayout>
    <Helmet>
      <title>Upload a photo | FaceReader</title>
    </Helmet>
    <PhotoAnalyzer />
  </MainLayout>
)

export default PhotoAnalyzerPage;
