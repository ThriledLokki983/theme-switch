/** @format */

import React from "react";
import { HeaderContainer, Header, Button } from "./Header.styles";

function HeaderMain({ themeHandler, text }) {
	return (
		<HeaderContainer>
			<Header>Hello Again</Header>
			<Button onClick={themeHandler}>{text}</Button>
		</HeaderContainer>
	);
}

export default HeaderMain;
