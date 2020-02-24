/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const RecipeCard = ({recipe}) => {

  return (
    <article key={recipe.fields.slug} className="recipe-card">
      <Link to={recipe.fields.slug}>
        <header>
          <Img alt={recipe.frontmatter.title} fluid={recipe.frontmatter.thumbnail.childImageSharp.fluid} />
        </header>
        <section>
          <h3>{recipe.frontmatter.title}</h3>
        </section>
        <footer className="d-none d-sm-block">
          <small>Prep: {recipe.frontmatter.prep} | Cook: {recipe.frontmatter.cook}</small>
        </footer>
      </Link>
    </article>
  )
  
}

export default RecipeCard
