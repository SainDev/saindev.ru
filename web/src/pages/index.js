import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Works from "../components/works"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Works />
    </Layout>
)

export default IndexPage
