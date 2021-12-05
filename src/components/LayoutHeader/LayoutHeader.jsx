import React from 'react';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultActiveFirst>
        <Menu.Item key="real-time-face-detector">
          <Link to="/real-time-face-detector">Webcam Face Detector</Link>
        </Menu.Item>
        <Menu.Item key="photo-face-detector">
          <Link to="/photo-face-detector">Photo Face Detector</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default LayoutHeader;
