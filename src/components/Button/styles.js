import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 5px 10px;
  border-radius: 2px;
`;
