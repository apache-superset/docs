import React from "react";
import { css } from '@emotion/core';
import { supersetTheme } from '@superset-ui/style';
import Layout from '../components/layout';

const { colors } = supersetTheme;

const title = css`
  margin-top: 50px;
  color:${colors.grayscale.base};
`;

const Resources = () => {
  return(
    <Layout>
      <div>
        <h1 css={title}>
          Resources
        </h1>
      </div>
    </Layout>
  );
}

export default Resources;
