import React from "react";
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import Image from '../components/image';
import Layout from '../components/layout';

const { colors } = supersetTheme;

const resourcesContainer = css`
  background: #fff;
  .links {
    margin-top: 80px;
    .resourcesLinks {
      display: flex;
      height: 400px;
      flex-direction: row;
      justify-content: center;
      text-align: center; 
      .link {
        margin: 25px;
        width: 150px;
        position: relative;
        font-size: 16px;
        flex-direction: column;
        border: solid 1px #cbcbcb;
        border-radius: 5px;
        padding: 46px 22px;
        height: 50%;
        &:hover{
          background-color: #c9eaf3;
          cursor: pointer;
        }
      }
        a {
          display: block;
          margin-bottom: 50px;
        }
        .gatsby-image-wrapper {
          display: block !important;
        }
      }
    }
  }
  .videos {
    text-align: center;
    iframe {
      margin: 15px;
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

          <div className="resourcesLinks">
            <div className="link">
              <a 
                href="https://hub.docker.com/r/preset/superset/" 
                target="_blank"
              > 
                Docker Image
              </a>
              <div>
              <Image imageName="docker" />
              </div>
            </div>
            <div className="link">
              <a 
                href="https://preset.io/blog/"
                target="_blank"
              >
              Preset Blog  
              </a>
              <div><Image imageName="preset" /></div>
            </div>
            <div className="link">
              <a
                href="https://www.youtube.com/channel/UCMuwrvBsg_jjI2gLcm04R0g"
                target="_blank"
              >  
                Youtube Page
              </a>
              <div><Image imageName="youtube" /></div>
            </div>
          </div>
          <div className="videos">
            <h2>Video Resources</h2>
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
              src="https://www.youtube.com/embed/W_Sp4jo1ACg" 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resources;
