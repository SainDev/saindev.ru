/*eslint-disable*/
import React from "react";
import { YMInitializer } from 'react-yandex-metrika';
// material-ui core components
import { Container, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important"
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative"
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container fixed>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()}, SainDev
                </div>
            </Container>
            {process.env.NODE_ENV === 'production' ? <YMInitializer accounts={[55371715]} options={{webvisor: true}} version="2" /> : null}
        </footer>
    );
}
