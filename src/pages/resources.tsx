import React from "react";
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import Layout from '../components/layout';

const { colors } = supersetTheme;

const resourcesContainer = css`
  background: #fff;
  iframe {
    margin: 15px;
  }
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
  margin-top: 150px;
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
           Preset Blog  
          </a>
          <a
            href="https://www.youtube.com/channel/UCMuwrvBsg_jjI2gLcm04R0g"
            target="_blank"
          >  
            Youtube Page
          </a>
          <h2>Video Resources</h2>
          <div>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Mhai7sVU244" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
           <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/24XDOkGJrEY" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe> 
           <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/NC9ehDUUu2o" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe> 
           <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/hLnDZcewogE" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe> 
           <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/W_Sp4jo1ACg&t=701svvv" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe> 
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resources;
