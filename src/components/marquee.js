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
      marqueeImage: file(absolutePath: { regex: "/header.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <p>
        Marquee Component
      </p>

      <div className="marquee-holder">
        <Image
          fluid={data.marqueeImage.childImageSharp.fluid}
          imgStyle={{
            borderRadius: `20px`,
          }}
        />
        <div className="text-box">
          <h2>Choose from thousands of recipes</h2>
          <p>Appropriately integrate technically sound value with scalable informediaries negotiate sustainable strategic theme areas</p>
          <p><strong>Sign up today</strong></p>
        </div>
        
      </div>

    </div>
  )
  
}

export default Marquee
