import React from 'react';
import { theme, useConfig } from 'docz';
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"
import { ThemeProvider } from 'theme-ui';
import { Button, Row, Col } from 'antd';
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import { 
  AreaChartOutlined, 
  BarChartOutlined, 
  PieChartOutlined, 
  DotChartOutlined,
  BoxPlotOutlined,
  SlidersOutlined,
  LineChartOutlined,
  StockOutlined
} from '@ant-design/icons';

import { Databases } from '../resources/data';
import Layout from '../components/layout';
import Image from '../components/image';
import 'antd/dist/antd.css';

const { colors } = supersetTheme;



const titleContainer= css`
  position: relative;
  text-align: center;
  padding-top: 211px;
  z-index: 0;
  background: white;
  Button {
    margin-top: 39px
  }
  .alert {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
    max-width: 600px;
    margin: 0 auto ;
    padding: .75rem 1.25rem;
    margin-top: 83px;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
`;

const title = css`
  color:${colors.grayscale.dark2};
`;

const secondaryHeading = css`
  font-size: 35px; 
  text-align: center;
`;

const featureHeight="160";

const featureSectionStyle= css`
  background: #fff;
  padding: 5vw 0;
  margin-top: 50px;
  margin-bottom: 100px;
  .featureList {
    padding: 0px;
    width: 100%;
    list-style-type: none;
    margin: 0 auto;
    max-width: 1000px;
    .feature {
      display: flex;
      height: ${featureHeight}px;
      margin: 10px;
      .imagePlaceHolder {
        display: block;
        position: relative;
        min-width: ${featureHeight}px;
        min-height: ${featureHeight}px;
        background: white;
        flex-grow: 1;
        svg {
          position: absolute; 
          width: 60px;
          height: 60px; 
          right: 16px;
        }
      }
      .featureText {
        display: block;
        padding-top: 30px;
        width: 300px; 
        flex-grow: 6;
        font-size: 15px;
        color:${colors.grayscale.base};
        line-height: 25px;
        letter-spacing: 1px;
      }
    }
  }
`;

const databaseHeight = 230;
const integrationSection = css`
  background: white;
  margin-bottom: 150px;
  .databaseSub {
    text-align: center;
    display: block;
    margin-bottom: 40px; 
  }

  .databaseList {
    margin-top: 100px;
    list-style-type: none;
    padding: 0px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 100px;
    a {
      margin: 15px;
      .gatsby-image-wrapper {
        img {
          filter: grayscale(100%);
          &:hover{
            filter: grayscale(0%);
          }
        }
      }
    }
  }
`;

const Theme = (props) => {
  const config = useConfig()
  
  return (
    <ThemeProvider theme={config}>
      <Layout> 
        <div css={titleContainer}>
          //@ts-ignore
          <Image imageName="logoLg"/>

          <h1 css={title}>
            Apache Superset (Incubating)
          </h1>
          <h2>
            Apache Superset (incubating) is a modern, <br/> 
            enterprise-ready business intelligence web application
          </h2>
          <Link to="/src-pages-docs-installation-index">
            <Button type="primary" size="large">
              Getting Started
            </Button>
          </Link>
          <div className="alert">
            Disclaimer: Apache Superset is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. 
            Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, 
            and decision making process have stabilized in a manner consistent with other successful ASF projects. 
            While incubation status is not necessarily a reflection of the completeness or stability of the code,
            it does indicate that the project has yet to be fully endorsed by the ASF.  
          </div>
        </div>

        <div css={featureSectionStyle}>
          <h2 css={secondaryHeading}>   
            Features
          </h2>   
          <ul className='featureList ant-row'>
              <Col span={12}>
                <li className='feature'>
                    <span className="imagePlaceHolder"> <PieChartOutlined /> </span>
                    <span className='featureText'>
                      A rich set of data visualizations
                    </span>
                </li>


                <li className='feature'>
                  <span className="imagePlaceHolder"> <BoxPlotOutlined /> </span>
                  <span className='featureText'>
                    Deep integration with Druid.io
                  </span>
                </li>

                <li className='feature'>
                  <span className="imagePlaceHolder"> <StockOutlined /> </span>
                  <span className='featureText'>
                    Integration with most SQL-speaking RDBMS through SQLAlchemy
                  </span>
                </li>
                <li className='feature'>
                  <span className="imagePlaceHolder"> <SlidersOutlined /> </span>
                  <span className='featureText'>
                    A simple semantic layer, allowing users to control how data sources are displayed in the UI by defining which fields should show up in which drop-down and which aggregation and function metrics are made available to the user
                  </span>
                </li>

              </Col>

              <Col span={12}>

                <li className='feature'>
                    <span className="imagePlaceHolder"> <DotChartOutlined /> </span>
                    <span className='featureText'>
                      Create and share dashboards
                    </span>
                </li>
                <li className='feature'>
                    <span className="imagePlaceHolder"> <BarChartOutlined /> </span>
                    <span className='featureText'>
                      An easy-to-use interface for exploring and visualizing data
                    </span>
                </li>


                <li className='feature'>
                  <span className="imagePlaceHolder"> <AreaChartOutlined /></span>
                  <span className='featureText'>
                    An extensible, high-granularity security/permission model allowing intricate rules on who can access individual features and the dataset
                  </span>
                </li>

                <li className='feature'>
                  <span className="imagePlaceHolder"> <LineChartOutlined /> </span>
                  <span className='featureText'>
                    Enterprise-ready authentication with integration with major authentication providers (database, OpenID, LDAP, OAuth & REMOTE_USER through Flask AppBuilder)
                  </span>
                </li>

              </Col>
          </ul>
        </div>

        <div css={integrationSection}>
          <h2 css={secondaryHeading}>   
            Databases
          </h2> 
          <span className="databaseSub">The following RDBMS are currently supported:</span>
          <ul className="databaseList">
            {Databases.map(({title, href, imgName: imageName, width, height})=> ( 
              <a href={href} target="_blank">
                <Image {...{imageName, type: "db", width, height}} />
              </a>
            ))}
          </ul>
        </div>


      </Layout>
    </ThemeProvider>
  )
}

// @ts-ignore
export default theme()(Theme)
