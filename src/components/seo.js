/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


function SEO({ description, lang, meta, title, isRecipe, image, steps, recipe }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const getSchemaOrgJSONLD = () => {

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        name: site.title,
        alternateName: site.siteMetadata.title,
      },
    ];
    
    if(isRecipe){

      const recipeSchemaJSONLD = {
          '@context': 'http://schema.org',
          '@type': 'Recipe',
          author: {
            '@type': 'Organization',
            name: 'Anderbuns Recipes'
          },
          name: title,
          description: description,
          cookTime: "PT" + parseInt(recipe.cook) + "M",
          prepTime: "PT" + parseInt(recipe.prep) + "M",
          recipeYield: recipe.servings,
          recipeCategory: "Dinner",
          image: `https://nosredna.org` + image,
          recipeInstructions: [],
          recipeIngredient: []
      };

      //Loop through the steps array to add to the JSONLD
      steps.forEach(step => {
        recipeSchemaJSONLD.recipeInstructions.push(
          {
            '@type': "HowToStep",
            text: step
          }
        )
      });

      //Loop through the ingredients array to add to the JSONLD
      recipe.ingredients.forEach(ingredient => {
        recipeSchemaJSONLD.recipeIngredient.push(
          ingredient.amount + " " + ingredient.ingredient
        )
      });
      

      return [ ...schemaOrgJSONLD, recipeSchemaJSONLD ]
    }

    return schemaOrgJSONLD

  };

  const schemaOrgJSONLD = getSchemaOrgJSONLD();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `fb:app_id`,
          content: `2959110510807273`
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
