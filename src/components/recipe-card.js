import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const RecipeCard = ({recipe}) => {

  return (
    <article key={recipe.fields.slug} className="recipe-card">
      <Link to={recipe.fields.slug}>
        <header>
          <Img alt={recipe.frontmatter.title} fluid={recipe.frontmatter.full_img.childImageSharp.fluid} />
        </header>
        <section>
          <h3>{recipe.frontmatter.title}</h3>
        </section>
        <footer>
          <small>Prep: {recipe.frontmatter.prep} { recipe.frontmatter.cook ? `| Cook: ${recipe.frontmatter.cook}` : '' } </small>
        </footer>
      </Link>
    </article>
  )
  
}

export default RecipeCard
