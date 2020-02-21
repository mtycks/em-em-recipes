/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Marquee = () => {

  const data = useStaticQuery(graphql`
    query MarqueeQuery {
      marqueeImage: file(absolutePath: { regex: "/header-fusilli.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="marquee-holder mb-5">
      <Image fluid={data.marqueeImage.childImageSharp.fluid} />
      <div className="text-box">
        <h2>Finally, a recipe website that gets straight to the point.</h2>
        <p class="lead">Because you don't need to read a story.<br /><strong>You just need the damn recipe.</strong></p>
      </div>
      
    </div>
  )
  
}

export default Marquee
