import React from "react"
import { Link, graphql } from "gatsby"
import Marquee from "../components/marquee"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import 'bootstrap/dist/css/bootstrap.min.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <div className="container-fluid">
          <Row>
            <Col>
              <Marquee />
            </Col>
          </Row>
        </div>

        <div className="container-fluid">

          <Row>
            <Col sm="3">
              <h3>Recipes</h3>
            </Col>
            <Col sm="9" className="hp-recipes">
              <Row>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Col sm="4">
                    <article key={node.fields.slug}>
                      <header>
                        <Img alt={node.frontmatter.title} fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                      </header>
                      <section>
                        <h3>{title}</h3>
                      </section>
                      <footer>
                        <small>Prep: {node.frontmatter.prep} | Cook: {node.frontmatter.cook}</small>
                      </footer>
                    </article>
                  </Col>
                )
              })}
              </Row>
            </Col>
          </Row>

        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            prep
            cook
            thumbnail{
              childImageSharp{
                fluid(maxWidth:500, quality:80){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
