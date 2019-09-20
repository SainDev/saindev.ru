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
            <Header
                brand={data.site.siteMetadata.title}
                //rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
            />
            <Parallax image={require("../images/landing-bg.jpg")}>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Parallax>

            <main style={{
                background: "#FFFFFF",
                position: "relative",
                zIndex: "3",

                margin: "-60px 30px 0px",
                borderRadius: "6px",
                boxShadow:
                    "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
            }}>
                <Container fixed>
                    {children}
                </Container>
            </main>

            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
