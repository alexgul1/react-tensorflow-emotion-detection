import React from 'react';
import { Helmet } from 'react-helmet';

import MainBanner from 'components/MainBanner/MainBanner';
import Author from 'components/Author/Author';
import HowItWorks from 'components/HowItWorks/HowItWorks';
import Footer from 'components/Footer/Footer';

const MainPage = () => (
  <>
    <Helmet>
      <title>Home page | FaceReader</title>
    </Helmet>
    <MainBanner />
    <Author />
    <HowItWorks />
    <Footer />
  </>
);

export default MainPage;
