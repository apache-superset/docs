import React from 'react'
import { theme, useConfig } from 'docz'
import { ThemeProvider } from 'theme-ui'
import { Button } from 'antd';
import Layout from '../components/layout';
import Menu from '../components/menu';
import NextLinks from '../components/next';

import 'antd/dist/antd.css';

console.log("---------->", Menu)

const Theme = ({ children }) => {
  const config = useConfig()
  //console.log("-------",{props});
  return (
    <ThemeProvider theme={config}>
      <Layout> 
        { children }
        <NextLinks />
      </Layout>
    </ThemeProvider>
  )
}

export default theme()(Theme)
