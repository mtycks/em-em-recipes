import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="container">
          <Row className="recipe-detail-row">
            <Col sm="6">
              <Img className="recipe-full-img" alt={post.frontmatter.title} fluid={post.frontmatter.full_img.childImageSharp.fluid} />
            </Col>
            <Col sm="6">
              <div className="recipe-details p-2">

                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.description}</p>

                <div className="uk-margin-medium-top uk-child-width-expand text-center uk-grid-divider uk-grid">
                  <div className="uk-first-column">
                    <span data-uk-icon="icon: clock; ratio: 1.4" className="uk-icon"><svg width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="clock"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle><rect x="9" y="4" width="1" height="7"></rect><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"></path></svg></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Prep Time</h5>
                    <span className="uk-text-small">{post.frontmatter.prep}</span>
                  </div>
                  <div>
                    <span data-uk-icon="icon: future; ratio: 1.4" className="uk-icon"><svg width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="future"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"></polyline><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"></path><rect x="9" y="4" width="1" height="7"></rect><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"></path></svg></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Cook Time</h5>
                    <span className="uk-text-small">{post.frontmatter.cook}</span>
                  </div>
                  <div>
                    <span data-uk-icon="icon: users; ratio: 1.4" className="uk-icon"><svg width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="users"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"></path><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"></path></svg></span>
                    <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Servings</h5>
                    <span className="uk-text-small">{post.frontmatter.servings}</span>
                  </div>
                </div>

                <hr />

                <div id="recipe-actions" className="text-center">

                  <Link to="#" className="uk-icon">
                    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="plus-circle"><circle fill="none" stroke="#787878" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle><line fill="none" stroke="#787878" x1="9.5" y1="5" x2="9.5" y2="14"></line><line fill="none" stroke="#787878" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>
                  </Link>
                  <Link to="#" className="uk-icon">
                    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="cart"><circle cx="7.3" cy="17.3" r="1.4"></circle><circle cx="13.3" cy="17.3" r="1.4"></circle><polyline fill="none" stroke="#787878" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"></polyline></svg>
                  </Link>
                  <Link to="#" className="uk-icon">
                      <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="print"><polyline fill="none" stroke="#787878" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"></polyline><polyline fill="none" stroke="#787878" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"></polyline><rect fill="none" stroke="#787878" width="11" height="6" x="4.5" y="11.5"></rect><rect width="8" height="1" x="6" y="13"></rect><rect width="8" height="1" x="6" y="15"></rect></svg>
                  </Link>
                </div>

              </div>


            </Col>

            <Col sm="12">
              <article>

                <Row className="pt-5 recipe-body">
                  <Col sm="7">
                    <h3>Instructions</h3>
                    <section className="recipe-instructions" dangerouslySetInnerHTML={{ __html: post.html }} />
                  </Col>
                  <Col sm={{size:4, offset:1}}>
                    <h3 className="sidebar-title">Ingredients</h3>
                    <ul className="list-unstyled sidebar-list ingredients-list">
                        {post.frontmatter.ingredients.map(ingredient => (
                            <li key={ingredient}>
                      
                                {ingredient.amount} {ingredient.link ? <a href={ingredient.link} target="_blank" rel="noopener noreferrer">{ingredient.ingredient} <span className="sr-only">(Opens in new window)</span></a> : ingredient.ingredient}

                            </li>
                        ))}
                    </ul>
                    <h3 className="sidebar-title">Tools</h3>
                    <ul className="list-unstyled sidebar-list tool-list">
                        {post.frontmatter.tools.map(tool => (
                            <li key={tool}>
                      
                                {tool.link ? <a href={tool.link} target="_blank" rel="noopener noreferrer">{tool.name} <span className="sr-only">(Opens in new window)</span></a> : tool.name}

                            </li>
                        ))}
                    </ul>
                  </Col>
                </Row>
              
                

                <hr />
                <footer>
                <Bio />
                </footer>

                <hr />

                <nav>
                  <ul>
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>

              </article>

            </Col>

          </Row>
        </div>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        prep
        cook
        servings
        ingredients{
          ingredient
          amount
          link
        }
        tools{
          name
          link
        }
        full_img{
          childImageSharp{
            fluid(maxWidth:800, quality:100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
