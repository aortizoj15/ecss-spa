import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-blue-700 px-1 py-0.5">
    <div className="my-0 mx-auto max-w-xl lg:max-w-4xl">
      <h1 className="text-base md:text-lg m-0 text-white text-center md:text-left">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
