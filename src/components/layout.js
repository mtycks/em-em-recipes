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
        <footer className="container pb-5 pt-5 text-center">
          © {new Date().getFullYear()} Em Em Recipes
        </footer>
      </div>
    )
  }
}

export default Layout
