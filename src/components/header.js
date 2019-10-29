import { Link } from "gatsby"
import React from "react"
// import logo from '../images/logo-designcode.svg'
// the above will be imported in the link tag
import './Header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
   <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="" /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Download</Link>
    <Link to="/workshops">Workshops</Link>
    <Link to="/buy"><button>Buy</button></Link>
   </div>
 </div> 
)

export default Header
