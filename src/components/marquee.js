/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Marquee = ({title, subTitle}) => {

  const data = useStaticQuery(graphql`
    query MarqueeQuery {
      marqueeImage: file(absolutePath: { regex: "/header-papas.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="marquee-holder mb-5">
      <Image fluid={data.marqueeImage.childImageSharp.fluid} />
      <div className="text-box">
      <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
        <p className="lead" dangerouslySetInnerHTML={{__html: subTitle}}></p>
      </div>
      
    </div>
  )
  
}

export default Marquee
