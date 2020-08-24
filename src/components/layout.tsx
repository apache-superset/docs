import React from "react";
import { Link } from "gatsby";
import {Layout, Menu, Button} from 'antd';
import { css } from '@emotion/core';

import Logo from './image';
import Footer from './footer';
import AppMenu from './menu';
import 'antd/dist/antd.css';
import "./layout.css"


const { Header, Content, Sider } = Layout;

const layoutStyles = css`
  .ant-layout {
    background-color: white !important; 
  }
  Button {
    background: #20A7C9;
    border-color: #20A7C9;
    border-radius: 4px;
  }
 `;

const headerStyle = css`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const getStartedButtonStyle = css`
  position: absolute;
  top: 0;
  right: 16px;
`;

const centerLayoutStyle = css`
  padding: 25px;
`;

const sidebarStyle = css`
  background-color: #fff;
  position: fixed;
  top: 64px;
  bottom: 0px;
  left: 0px;
`;

const contentStyle = css`
  margin-top: 3px;
  background-color: white;
  blockquote {
    color: rgb(132, 146, 166);
    padding: 10px 30px;
    margin: 30px 0px;
    border-radius: 3px;
    border-left: 4px solid rgb(56, 211, 236);
    background: rgb(239, 242, 247);
  }
  pre {
    border: solid #00000033 1px;
    padding: 5px;
    background-color: #82ef8217;
    border-radius: 3px;
  }
  p {
    font-size: 16px;
  }
`;

const contentLayoutDocsStyle = css`
  position:fixed;
  top: 64px;
  left: 250px;
  right: 0px;
  bottom: 0px;
  overflow: auto;
`;

const logoStyle = css`
  float:left;
  margin-left: -40px;
  margin-top: 15px;
`



const AppLayout = ({ children }) => {
  const isOnDocsPage = window.location.pathname.indexOf("docs") > 0;

  return (
    <Layout css={layoutStyles}>
      <Header css={headerStyle}>
        <Link to="/">
          <Logo css={logoStyle} imageName="logoSm" />
        </Link>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/community">Community</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/resources"> Resources</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/src-pages-docs-installation-index">Documentation</Link>
          </Menu.Item>
        </Menu>
        <div css={getStartedButtonStyle}>
          <Link to="/src-pages-docs-installation-index">
            <Button type="primary" size="large">Get Started</Button>
          </Link>
        </div>
      </Header>
      {isOnDocsPage ? 
        <Layout css={contentLayoutDocsStyle }>
          {isOnDocsPage &&
            <Sider width={250} css={sidebarStyle}>
              <AppMenu/>
            </Sider>
          }
          <Layout css={contentStyle}>
            <div css={centerLayoutStyle}>
              {children}
            </div>
            <Footer />
          </Layout>
        </Layout>
      : 
        <Layout>
          { children }
          <Footer />
        </Layout>
      }
    </Layout>

  )
}

export default AppLayout

