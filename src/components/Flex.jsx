import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
	justify-content: ${(props) => props.justify || 'stretch'};
	align-items: ${(props) => props.align || 'stretch'};
	margin: ${(props) => props.margin || '0'};
`;

export const Flex = (props) => {
	return <StyledFlex {...props} />;
};
