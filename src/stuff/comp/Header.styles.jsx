/** @format */
import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 8rem;
	background: ${({ theme }) => theme.background};
`;

export const Header = styled.h1`
	color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
	border: 5px solid ${({ theme }) => theme.background};
`;
