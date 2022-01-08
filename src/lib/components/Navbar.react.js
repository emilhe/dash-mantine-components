import React from "react";
import PropTypes from "prop-types";
import { Navbar as MantineNavbar } from "@mantine/core";
import { omit } from "ramda";

/**
 * Navbar component for AppShell. For more information, see: https://mantine.dev/core/app-shell/
 */
const Navbar = (props) => {
    return (
        <MantineNavbar {...omit(["children", "setProps"], props)}>
            {props.children}
        </MantineNavbar>
    );
};

Navbar.displayName = "Navbar";

Navbar.defaultProps = {};

Navbar.propTypes = {

    /**
     * Navbar content
     */
     children: PropTypes.node,


    /**
     * Set position to fixed
     */
     fixed: PropTypes.bool,

    /**
     * Navbar height
     */
     height : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Set to true to hide breakpoint at hiddenBreakpoint
     */
     hidden: PropTypes.bool,

    /**
     * Breakpoint at which navbar will be hidden if hidden prop is true
     */
     hiddenBreakpoint:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Navbar padding from theme.spacing or number to set padding in px
     */
     padding : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Position for fixed Navbar
     */
     position : PropTypes.object,  // TODO: WRAP IN OBJECT

    /**
     * Navbar width with breakpoints
     */
     width : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),   // TODO: WRAP IN OBJECT

    /**
     * The z-index
     */
    zIndex: PropTypes.number,

    /**
     * Often used with CSS to style elements with common properties
     */
     className: PropTypes.string,

    /**
     * The ID of this component, used to identify dash components in callbacks
     */
     id: PropTypes.string,

    /**
     * Inline style override
     */
    style: PropTypes.object,

};

export default Navbar;
