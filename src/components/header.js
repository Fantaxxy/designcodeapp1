import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo-designcode.svg'

const Header = ({ siteTitle }) => (
 <div className="Header">
   <div className="HeaderGroup">
    <Link to="/"><img src={logo} width="" /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Download</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Button</button></Link>
   </div>
 </div> 
)

export default Header
