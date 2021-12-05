import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import WebcamAnalyzer from './components/WebcamAnalyzer/WebcamAnalyzer';
import LayoutHeader from './components/LayoutHeader/LayoutHeader';
import PhotoAnalyzer from './components/PhotoAnalyzer/PhotoAnalyzer';
import ModelStatusProvider from './contexts/modelStatus.context';

const { Content } = Layout;

const App = () => {
  return (
    <ModelStatusProvider>
      <Router>
        <Layout>
          <LayoutHeader />
          <Content>
            <Switch>
              <Route path="/real-time-face-detector">
                <WebcamAnalyzer />
              </Route>
              <Route path="/photo-face-detector">
                <PhotoAnalyzer />
              </Route>
              <Route path="/" exact>
                <h1>stub</h1>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Router>
    </ModelStatusProvider>
  );
};

export default App;
