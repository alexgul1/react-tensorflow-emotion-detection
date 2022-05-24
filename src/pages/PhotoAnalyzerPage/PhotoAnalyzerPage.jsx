import React from 'react';
import { Helmet } from 'react-helmet';

import MainLayout from 'layouts/MainLayout/MainLayout';
import PhotoUploader from 'components/PhotoUploader/PhotoUploader';

const PhotoAnalyzerPage = () => (
  <MainLayout>
    <Helmet>
      <title>Upload a photo | FaceReader</title>
    </Helmet>
    <PhotoUploader />
  </MainLayout>
);

export default PhotoAnalyzerPage;
