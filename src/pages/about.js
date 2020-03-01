import React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import RecipeCard from '../components/recipe-card'

class AboutPage extends React.Component {
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
              <h1>We just wanted a recipe website that cut to the chase.</h1>
              <p>We also had a hard time remembering our own recipes. So, why not make an awesome website?</p>
              <p>We're just getting started, so be sure to check back regularly!</p>
              <p>If you have any suggestions for us, shoot us a line!</p>
              <p><a class="btn btn-primary push-right" href="/contact">Contact Us</a></p>
            </Col>
            <Col md="12" md="6" className="hp-recipes order-first order-md-last">
              <Row>
                <Col>
                  <Image className="recipe-full-img mb-4" fluid={data.aboutImage.childImageSharp.fluid} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5 pt-5">
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

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    aboutImage: file(absolutePath: { regex: "/about-us-@2x.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
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
