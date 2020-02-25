import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'
import RecipeCard from '../components/recipe-card'

const TagPageTemplate = ({ data, pageContext, location }) => {
//class TagPageTemplate extends React.Component {


    const { tag, totalCount } = pageContext


    return (
      <Layout location={location} title={tag}>
        <SEO
          title={tag}
          description={tag}
        />

        <div className="container">

          <Row className="hp-recipes">

            <Col xs="12" className="mb-4">
              <h1>{tag} ({totalCount})</h1>
            </Col>

            {data.allMarkdownRemark.edges.map(({node}) => (

              <Col sm="4" xs="6">
                <RecipeCard recipe={node} />
              </Col>

            ))}

          </Row>

        </div>

      </Layout>
    )

}

export const tagQuery = graphql`

    query($tag: String!){

        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ){
            totalCount
            edges{
                node{
                    id
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
                    fields{
                        slug
                    }
                    excerpt
                }
            }
        }
    }

`

export default TagPageTemplate


