import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { 
  GithubOutlined,
  SlackSquareOutlined
} from '@ant-design/icons'; 

const { Footer } = Layout;

const footerStyle = css`
  background-color: #323232; 
  color: #ccc;
`;

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

const LayoutFooter = () => (
  <>

    <div css={iconContainerStyle} >
      <div className="icons">
        <a href="https://apache-superset.slack.com/join/shared_invite/zt-g8lpruog-HeqpgYrwdfrD5OYhlU7hPQ#/" target="_blank">
        <SlackSquareOutlined className="icon"/>
        </a>
        <a href="https://github.com/apache/incubator-superset" target="_blank">
        <GithubOutlined className="icon" />
        </a>
        <a href="https://stackoverflow.com/questions/tagged/apache-superset+superset" target="_blank">
        <img src="/images/so-icon.svg" className="icon svg"/>
        </a>
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
  </>
);

export default LayoutFooter;