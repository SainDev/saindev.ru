import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Works from "../components/works"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Now go build something great.</p>
        <Works />
    </Layout>
)

export default IndexPage
