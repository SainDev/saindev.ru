import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, Toolbar, IconButton, Button, Hidden } from '@material-ui/core'
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles({
    appBar: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      width: "100%",
      backgroundColor: "#fff",
      boxShadow:
        "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "relative",
      zIndex: "unset"
    },
    absolute: {
      position: "absolute",
      zIndex: "1100"
    },
    fixed: {
      position: "fixed",
      zIndex: "1100"
    },
    flex: {
      flex: 1
    },
    title: {
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      color: "inherit",
      padding: "8px 16px",
      letterSpacing: "unset",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    },
    appResponsive: {
      margin: "20px 10px"
    },
    transparent: {
      backgroundColor: "transparent !important",
      boxShadow: "none",
      paddingTop: "25px",
      color: "#FFFFFF"
    },
    dark: {
      color: "#FFFFFF",
      backgroundColor: "#212121 !important",
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
      border: "0",
      padding: "0.625rem 0",
      marginBottom: "20px",
      color: "#555",
      backgroundColor: "#fff !important",
      boxShadow:
        "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    }
});

export default function Header(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const headerColorChange = () => {
        const { color, changeColorOnScroll } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    const brandComponent = <Button className={classes.title}>{brand}</Button>;
    return (
        <AppBar className={appBarClasses}>
            <Container maxWidth="lg">
                <Toolbar>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className={classes.flex}>
                        {leftLinks !== undefined ? (
                            <Hidden smDown implementation="css">
                                {leftLinks}
                            </Hidden>
                        ) : (
                            brandComponent
                        )}
                    </div>
                    <Hidden smDown implementation="css">
                        {rightLinks}
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "white",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "transparent",
      "white",
      "dark"
    ]).isRequired
  })
};
