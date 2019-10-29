import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <div>
    <div className="Hero" >
      <div className="HeroGroup" >
          <h1>Learn to Design and Code with React</h1>
          <p>I am Creating Finacial Abundance, Prosperity and Freedom.</p>
          <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </div>
    
    
      
 
    
  </Layout>
)

export default IndexPage
