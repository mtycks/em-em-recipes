import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeCard from '../components/recipe-card'

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const tags = data.tags.group

    console.log(tags)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="View all Em Em Recipes" />

        <div className="container">

          <Row>
            <Col lg="3" className="order-lg-first order-last">
              <h3>Recipes</h3>
              <ul className="recipe-tags list-unstyled row">
                {tags.map(({ tag, totalCount }) => {
                  return (
                    <li key={tag.tag} className="mb-0 pb-2 pt-2 col-4 col-lg-12">
                      {tag} ({totalCount})
                    </li>
                  )
                })}
              </ul>
            </Col>
            <Col md="12" lg="9" className="hp-recipes">
              <Row>
              {posts.map(({ node }) => {
                return (
                  <Col xl="4" xs="6">
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

export default ContactPage

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
    tags: allMarkdownRemark(limit: 2000){
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
