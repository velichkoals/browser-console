import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
	font-size: 15px;
	color: ${(props) => props.color || props.theme.colors.white};};
`;

export const Line = (props) => {
	return <StyledLine {...props} />;
};
