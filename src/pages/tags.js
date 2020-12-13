import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import { slugify } from '../utils/utilityFunctions'

class TagsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const tags = data.tags.group

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="View the Nosredna Cookbook" />

        <div className="container">

          <Row>

          {tags.map(({ tag, totalCount }) => {
              return (
                <Col key={tag.tag} md="4" sm="6">
                  <div className="tag-holder">
                    <Link to={`/tags/${slugify(tag)}`} className="portfolio-item tag-item p-3">
                      {tag} <small>{totalCount} recipe{totalCount > 1 ? `s` : ``}</small>
                    </Link>
                  </div>
                </Col>
              )
            })}

          </Row>

        </div>
      </Layout>
    )
  }
}

export default TagsPage

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
