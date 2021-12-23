import React from "react";
import { Table as MantineTable } from "@mantine/core";
import PropTypes from "prop-types";
import { pick } from "ramda";

/**
 * A simple table component. For more information, see: https://mantine.dev/core/table/
 */
const Table = (props) => {
    return (
        <MantineTable
            {...pick(
                ["striped", "highlightOnHover", "style", "captionSide"],
                props
            )}
        >
            {props.children}
        </MantineTable>
    );
};

Table.displayName = "Table";

Table.defaultProps = {
    captionSide: "bottom",
};

Table.propTypes = {
    /**
     * Table caption position
     */
    captionSide: PropTypes.oneOf(["bottom", "top"]),

    /**
     * If true row will have hover color
     */
     highlightOnHover: PropTypes.bool,

    /**
     * If true every odd row of table will have gray background color
     */
     striped: PropTypes.bool,

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
     * Table children
     */
    children: PropTypes.node
};

export default Table;