import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import * as theme from '../../styles/theme';


const StyledButton = styled.button`
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


/**
 * Classic button following the style pattern.
 * You can change the label of the button by setting the label property.
 * The button can be customize by sending the `theme` object.
 * Only the property send will be override.
 */
class Button extends Component {

    static propTypes = {
        /** Theme file to override the wall configuration */
        theme: PropTypes.shape({
            /** Button's background color */
            bgColor: PropTypes.string,
            /** Button's font color */
            fontColor: PropTypes.string,
            /** Button's background color on hover */
            hoverColor: PropTypes.string
        }),
        /** The label the the button contain */
        label: PropTypes.string.required,
    }

    static defaultProps = {
        label: "Submit"
    }

    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
            // when the theme value is set, the prop is merged.
            theme: this.props.theme === undefined ? theme : Object.assign(theme,this.props.theme) 
        };
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <StyledButton>
                    {this.state.label}
                </StyledButton>
            </ThemeProvider>
        );
    }
}

export default Button;