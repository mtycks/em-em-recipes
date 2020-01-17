import React from "react"
import Navigation from "../components/nav"
import '../styles/index.scss'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    

    if (location.pathname === rootPath) {
      header = (
        <span>...</span>
      )
    } else {
      header = (
        <span>......</span>
      )
    }
    return (
      <div>
        <header><Navigation />{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
