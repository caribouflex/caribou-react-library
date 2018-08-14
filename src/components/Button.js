import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from '../styles/colors';


const StyledButton = styled.button`
    background: ${({ bgColor })  => colors[bgColor]};
    border: none;
    border-radius: 2px;
    color: ${({ fontColor })  => colors[fontColor]};
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
        background: ${({ hoverColor })  => colors[hoverColor]};
    }
`;

class Button extends Component {

    static propTypes = {
        label: PropTypes.string.required,
        bgColor: PropTypes.string,
        fontColor: PropTypes.string,
        hoverColor: PropTypes.string
    }

    static defaultProps = {
        label: "Submit",
        bgColor: 'blue',
        fontColor: 'white',
        hoverColor: 'darkBlue'
    }

    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
            bgColor: this.props.bgColor,
            fontColor: this.props.fontColor,
            hoverColor: this.props.hoverColor
        };
    }
    render() {
        return (
            <StyledButton
                bgColor = {this.state.bgColor}
                fontColor = {this.state.fontColor}
                hoverColor = {this.state.hoverColor}
            >{this.state.label}</StyledButton>
        );
    }
}

export default Button;