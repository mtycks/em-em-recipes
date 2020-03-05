import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeCard from '../components/recipe-card'
import MyForm from '../components/contactForm'

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact Us" />

        <div className="container">

          <Row className="recipe-detail-row mb-5 mt-5">
            <Col md="6">
              <h1>Want to send us a note?</h1>
              <p>Use this form to let us know how we're doing or if you just want to tell us how awesome (or terribly bad) one of our recipes was.</p>
              <p>Got a recipe you want us to try? Send it!</p>
            </Col>
            <Col sm="12" md="6" className="hp-recipes">
              <Row>
                <Col>
                  <MyForm />
                </Col>
              </Row>
            </Col>

            <Col className="mt-5">
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

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3 
    ){
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
