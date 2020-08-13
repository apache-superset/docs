import React from "react";
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import { Button, Card} from 'antd';
import { ThemeProvider } from 'theme-ui';
import Layout from '../components/layout';
import { pmc } from '../resources/data';

const { colors } = supersetTheme;

const { Meta } = Card;

const titleContainer= css`
  text-align: center;
  background: #fff;
`;

const title = css`
  margin-top: 150px;
  color:${colors.grayscale.base};
`;

const hr = css`
  width: 60%;
`;

const communityContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  overflow: auto;
  .communityCard {
    margin: 10px 20px;
    .ant-card-meta-title {
      text-overflow: clip;
      white-space: normal;
    }
  }
`;

const getInvolvedContainer = css`
  padding: 40px 0;
  margin-bottom: 25px;
  .resources {
    display: block;
    font-size: 15px;
    margin: 20px 0;
  }
  .title{
    font-size: 30px;
  }
  .section {
    border-top: 1px solid #ccc;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 0;
  }
  .ppm {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;


const Community = () => {
  let pmcList = pmc.map(e=>(
    <a href={e.github} target="_blank">
      <Card
        className="communityCard"
        hoverable
        style={{ width: '140px' }}
        size="small"
        cover={<img alt="example" src={e.image} />}
      >
        <Meta title={e.name} />
      </Card>
    </a>
  ));
  return(
      <Layout>
        <div css={titleContainer}>
          <h1 css={title}>
            Community
          </h1>
          <h2>
          The community has many active members who support each other in solving problems
          </h2>
          <div css={getInvolvedContainer}>
            <div className="joinCommunity section">
              <h2 className="title">Join the Community</h2>
              <span className='resources'>
                  Use  <a href="https://stackoverflow.com/questions/tagged/apache-superset" target="_blank">stack overflow </a> to get help! <br/>
                  Use our <a href="https://apache-superset.slack.com" target="_blank">Slack Community</a>! <br/> 
                  Join our <a href="https://lists.apache.org/list.html?dev@superset.apache.org" target="_blank">Mailing list</a> <br/>

                <h3>
                  Report a Bug!
                </h3>
                <span>
                  Use our <a href="https://github.com/apache/incubator-superset" target="_blank">Github</a> to create a ticket
                </span>
              </span>
              <a href="https://github.com/apache-superset/awesome-apache-superset" target="_blank">
                <Button type="primary" size="large">
                  More Resources!
                </Button>
              </a>
            </div>
            <h3 className="title ppm">PPMC Members</h3>
            <div css={communityContainer}>
              { pmcList }
            </div>
          </div> 
        </div>
      </Layout>   
  );
}

export default Community;
