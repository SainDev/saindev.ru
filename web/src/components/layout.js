/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Parallax from '../components/parallax'
import { Container, Grid } from '@material-ui/core';
import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            {/* <Header
                brand={data.site.siteMetadata.title}
                //rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            /> */}
            <Parallax image={require("../images/landing-bg2.jpg")}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div style={{color: "#FFFFFF", textAlign: "right"}}>
                                <h1 style={{fontSize: "2.2rem", fontWeight: "600", display: "inline-block", position: "relative"}}>
                                    Hello, I'm <span className="highlight">SainDev</span>
                                </h1>
                                <h3 style={{fontSize: "1.313rem", margin: "0 0"}}>
                                    I'm a full-stack web developer.<br />
                                    <small style={{fontSize: "0.8rem"}}>This site is under construction.</small>
                                </h3>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Parallax>

            <Container maxWidth="lg">
                <main style={{
                    background: "#FFFFFF",
                    position: "relative",
                    zIndex: "3",

                    margin: "-60px 0px 0px",
                    borderRadius: "6px",
                    boxShadow:
                        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
                }}>
                    {children}
                </main>
            </Container>

            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
