import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from '@emotion/core';

const Image = ({ imageName, type, width, height, ...otherProps}) => {
  const data = useStaticQuery(graphql`
    query {
      logoSm: file(relativePath: { eq: "src/images/s.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      logoLg: file(relativePath: { eq: "src/images/s.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
 
      getAllImages: allImageSharp {
        edges {
          node {
            fixed(height:70) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
   }
  `);

  const filter = data.getAllImages.edges.filter(n=> n.node.fixed.originalName === imageName)
  const imgStyle = width && height ? {width, height}: {};

  return type === 'db' ?
     <Img fixed={filter[0]?.node?.fixed} style={imgStyle} imgStyle={imgStyle}/>
    :
     <Img fixed={data[imageName].childImageSharp.fixed} {...otherProps} />
  
}

export default Image;
