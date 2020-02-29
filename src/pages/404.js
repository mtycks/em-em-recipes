import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeCard from '../components/recipe-card'
import { slugify } from '../utils/utilityFunctions'

class NotFoundPage extends React.Component {
  render() {

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />

        <div className="container">

          <Row>
            <Col>
            
              <div className="text-center mb-5 mt-5" style={{overflow:'hidden'}}>
                <h3 style={{fontSize:'10rem'}} className="mb-0">404</h3>
                <h1 className="mb-5">Page Not Found</h1>
              </div>
              <p className="text-center">While you're here, maybe you want to check out one of these recipes:</p>

              <Row className="hp-recipes">
              {posts.map(({ node }) => {
                  return (
                    <Col md="4">
                      <RecipeCard recipe={node} />
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

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 3
    ) {
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
