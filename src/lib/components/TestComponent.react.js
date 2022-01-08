import React from "react";
import PropTypes from "prop-types";
import { renderDashComponent } from "dash-extensions-js";

/**
 * Component for testing stuff.
 */
const TestComponent = (props) => {
    return (
        <div>
            {renderDashComponent(props.item)}
        </div>
    );
};

TestComponent.displayName = "TestComponent";

TestComponent.defaultProps = {};

TestComponent.propTypes = {

    /**
     * TestComponent children.
     */
    children: PropTypes.node,
    
    /**
     * TestComponent children.
     */
     item: PropTypes.oneOfType([
         PropTypes.object, 
         PropTypes.arrayOf(PropTypes.object),
         PropTypes.string, 
         PropTypes.arrayOf(PropTypes.string)
    ]),

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
    style: PropTypes.object

};

export default TestComponent;
