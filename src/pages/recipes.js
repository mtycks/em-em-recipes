import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import RecipeCard from '../components/recipe-card'
import { slugify } from '../utils/utilityFunctions'

class AllRecipes extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const tags = data.tags.group

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Browse the nosredna cookbook" />

        <div className="container">

          <Row>
            <Col lg="3">
              <h3>Recipes</h3>
              <ul className="recipe-tags list-unstyled row">
              {tags.map(({ tag, totalCount }) => {
                  return (
                    <li key={tag.tag} className="mb-0 pb-2 pt-2 col-4 col-lg-12">
                      <Link to={`/tags/${slugify(tag)}`} className="portfolio-item">
                        {tag} <span className="d-none d-sm-inline-block">({totalCount})</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Col>
            <Col md="12" lg="9" className="hp-recipes">
              <Row>
              {posts.map(({ node }) => {
                return (
                  <Col xl="4" sm="6" xs="12">
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

export default AllRecipes

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
            full_img{
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
