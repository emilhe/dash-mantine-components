import React from "react";
import PropTypes from "prop-types";
import { AppShell as MantineAppShell } from "@mantine/core";
import { omit } from "ramda";

/**
 * Navbar component for AppShell. For more information, see: https://mantine.dev/core/app-shell/
 */
const AppShell = (props) => {
    const allChildren = React.Children.toArray(props.children);
    const appShellProps = omit(["children", "setProps"], props);
    console.log(allChildren)
    const header = allChildren.filter(item => item.props._dashprivate_layout.type === "Header");
    if(header.length > 0){
        appShellProps.header = header[0];
    }
    console.log(header)
    const navbar = allChildren.filter(item => item.props._dashprivate_layout.type === "Navbar");
    if(navbar.length > 0){
        appShellProps.navbar = navbar[0];
    }
    console.log(navbar)


    const children = allChildren.filter(item => !(["Header", "Navbar"].includes(item.props._dashprivate_layout.type)));
    console.log(children)

    return (
        <MantineAppShell {...appShellProps}>
            {children}
        </MantineAppShell>
    );
};

AppShell.displayName = "AppShell";

AppShell.defaultProps = {};

AppShell.propTypes = {

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

export default AppShell;
