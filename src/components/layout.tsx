import React from "react";
import { theme, useConfig } from 'docz';
import { ThemeProvider } from 'theme-ui';
import { useStaticQuery, graphql, Link } from "gatsby";
import {Layout, Menu, Button} from 'antd';
import { css } from '@emotion/core';
import { 
  GithubOutlined,
  SlackSquareOutlined
} from '@ant-design/icons'; 
import { supersetTheme } from '@superset-ui/style';

import Logo from './image';
import AppMenu from './menu';
import 'antd/dist/antd.css';
import "./layout.css"


const { Header, Content, Footer, Sider } = Layout;

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

const footerStyle = css`
  background-color: #323232; 
  color: #ccc;
`;

const getStartedButtonStyle = css`
  position: absolute;
  top: 0;
  right: 16px;
`;

const centerLayoutStyle = css`
  padding: 25px;
  min-height: 100vw;
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

const iconContainerStyle = css`
  height: 100px;
  background-color: #323232; 
  display: flex;
  flex-direction: row;
  .icons {
    float: right;
    width: 50%;
    padding-left: 50px;
    svg {
      margin-top: 15px;
      color: #ccc;
      width: 60px;
      height: 60px;
      margin-left: 10px; 
    }
    .svg {
      width: 60px;
      height: 60px;
      margin-top: -35px;
    }
  }
  .communityBtn {
    width: 50%;
    Button {
      margin-top: 15px;
      margin-right: 15px;
      float: right;
    }
  }
`;

const AppLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
            <Button type="primary" size="large">Getting Started</Button>
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
            <Footer css={footerStyle}>
              © Copyright {new Date().getFullYear()}, 
              The Apache Software Fountation, Licensced under the Apache License
            </Footer>
          </Layout>
        </Layout>
      : 
        <Layout>
          { children }
          <div css={iconContainerStyle} >
            <div className="icons">
              <a href="https://apache-superset.slack.com" target="_blank">
                <SlackSquareOutlined className="icon"/>
              </a>
              <a href="https://github.com/apache/incubator-superset" target="_blank">
                <GithubOutlined className="icon" />
              </a>
              <img src="/images/so-icon.svg" className="icon svg"/>
            </div>
            <div className="communityBtn">
              <Link to="/community">
                <Button type="primary" size="large">
                  Join the Community!
                </Button>
              </Link>
            </div>
          </div>
          <Footer css={footerStyle}>
            © Copyright {new Date().getFullYear()}, 
            <a 
              href="http://www.apache.org/"
              target="_blank"
            >
            &nbsp;The Apache Software Fountation
            </a>
            , &nbsp;Licensed under the Apache 
            <a 
              href="https://www.apache.org/licenses/"
              target="_blank" 
            >
              &nbsp;License.
            </a> <br/>

            <div>
            Disclaimer: Apache Superset is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. 
            Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, 
            and decision making process have stabilized in a manner consistent with other successful ASF projects. 
            While incubation status is not necessarily a reflection of the completeness or stability of the code,
            it does indicate that the project has yet to be fully endorsed by the ASF.  
          </div>
          </Footer>
        </Layout>
      }
    </Layout>

  )
}

export default AppLayout

