import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: props => props.type 
})`
    background: ${props => props.theme.primaryButtonColor};
    border: none;
    border-radius: 2px;
    color: ${props => props.theme.primaryButtonFontColor};
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    line-height: 40px;
    font-weight: 200;
    margin: 8px 0;
    outline: none;
    padding: 0 12px;
    text-transform: uppercase;
    transition: all 300ms ease;
    &:hover {
        background: ${props => props.theme.primaryButtonHoverColor};
    }
    &:active {
        background: ${props => props.theme.primaryButtonSelectedColor};
    }
`;

Button.propTypes = {
    /** Theme file to override the wall configuration */
    theme: PropTypes.shape({
        /** Button's background color */
        primaryButtonColor: PropTypes.string,
        /** Button's font color */
        primaryButtonFontColor: PropTypes.string,
        /** Button's background color on hover */
        primaryButtonHoverColor: PropTypes.string,
        /** Button's background color on active */
        primaryButtonSelectedColor: PropTypes.string
    }),

    /** Button attribute that must reflect the button use */
    type: PropTypes.string.required
}

Button.defaultProps = {
    type: "button"
}

/**
 * Classic button following the style pattern.
 * You can change the label of the button by setting the label property.
 * The button can be customize by sending the `theme` object.
 * Only the property send will be override.
 */
/** @component */
export { Button };