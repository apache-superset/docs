import React from "react";
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import Layout from '../components/layout';

const { colors } = supersetTheme;

const resourcesContainer = css`
  background: #fff;
  height: 60vw;
  .links {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      margin: 25px;
      font-size: 16px;
    }
  }
`;

const title = css`
  margin-top: 50px;
  color:${colors.grayscale.base};
  text-align: center;
`;

const Resources = () => {
  return(
    <Layout>
      <div css={resourcesContainer}>
        <h1 css={title}>
          Resources
        </h1>
        <div className="links">
          <a 
            href="https://hub.docker.com/r/preset/superset/" 
            target="_blank"
          > 
            Docker Image
          </a>
          <a 
            href="https://preset.io/blog/"
            target="_blank"
          >
           Prest Blog  
          </a>
          <a
            href="https://www.youtube.com/channel/UCMuwrvBsg_jjI2gLcm04R0g"
            target="_blank"
          >  
            Youtube Page
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Resources;
