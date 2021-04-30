import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section>
      <StaticImage
        src="../images/bathtub_w_logo.png"
      />
    </section>
    <section>
      <p>
        EC Synthetic Services was founded by Edwin Vasquez, after working for many reputable companies for over 10 years as a sub-contractor. It was in 2018, when he decided to branch out on his own and create his own company. Here at EC Synthetic Services, we are committed to making sure that our clients are satisfied with every project. We take pride and ownership treating each job as if it was our very own home. Contact us today for more information!
      </p>
    </section>
  </Layout>
)

export default IndexPage
