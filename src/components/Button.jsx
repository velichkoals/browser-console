import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs((props) => ({
	outlined: true,
}))`
	align-self: ${(props) => props.align || 'stretch'};
	border: none;
	margin: 0 40px;
	padding: 10px 25px;
	font-size: 18px;
	cursor: pointer;

	font-weight: 100;
	position: relative;

	&:focus {
		outline: none;
	}

	svg {
		height: 45px;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	rect {
		fill: none;
		stroke: rgba(29, 194, 57, 0.33);
		stroke-width: 2;
		stroke-dasharray: 422, 0;
		transition: all 0.35s linear;
	}

	&:hover {
		letter-spacing: 1px;
		font-weight: 600;

		rect {
			stroke-width: 5;
			stroke-dasharray: 15, 310;
			stroke-dashoffset: 48;
			transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
		}
	}

	${(props) =>
		props.primary &&
		css`
			color: ${(props) => props.color || props.theme.colors.white};
			background: ${(props) => props.background || props.theme.colors.white};
		`}

	${(props) =>
		props.outlined &&
		css`
			color: ${(props) => props.color || props.theme.colors.white};
			border-radius: 3px;
			background: transparent;
		`}
`;

// const LargeButton = styled(StyledButton)`
// 	font-size: 40px;
// `;

export const Button = (props) => {
	return <StyledButton {...props} />;
};
