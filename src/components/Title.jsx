import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.h4`
	color: ${(props) => props.color};
`;

export const Title = (props) => {
	return <StyledTitle {...props} />;
};
