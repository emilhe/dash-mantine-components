import React from "react";
import PropTypes from "prop-types";
import { Header as MantineHeader } from "@mantine/core";
import { omit } from "ramda";

/**
 * Header component for AppShell. For more information, see: https://mantine.dev/core/app-shell/
 */
const Header = (props) => {
    return (
        <MantineHeader {...omit(["children", "setProps"], props)}>
            {props.children}
        </MantineHeader>
    );
};

Header.displayName = "Header";

Header.defaultProps = {};

Header.propTypes = {

    /**
     * The z-index
     */
    zIndex: PropTypes.number,

    /**
     * Control top, left, right or bottom position values, controlled by AppShell component if rendered inside
     */
    position : PropTypes.object,   // TODO: WRAP IN OBJECT

    /**
     * Header padding from theme.spacing or number to set padding in px
     */
     padding : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Header height
     */
     height : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Changes position to fixed, controlled by AppShell component if rendered inside
     */
     fixed: PropTypes.bool,

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

    /**
     * Header content
     */
    children: PropTypes.node

};

export default Header;
