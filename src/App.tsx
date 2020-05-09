import React, { Component } from 'react';
import Button from 'antd/es/button';
import './App.css';
import { Layout, Menu, Breadcrumb,Space, Card,Row, Col, Divider   } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
      <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
      <Footer>footer</Footer>
      </Layout>
  </div>
    );
  }
}

export default App;