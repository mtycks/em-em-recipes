import React from "react"
import Navigation from "../components/nav"
import '../styles/index.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <header><Navigation /></header>
        <main>{children}</main>
        <footer className="container">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
