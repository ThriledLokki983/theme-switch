/** @format */
import { useState } from "react";
import { ligthTheme, darkTheme } from "./stuff/theme";
import styled, { ThemeProvider } from "styled-components";
import HeaderMain from "./stuff/comp/Header.com";
import "./App.css";

function App() {
	const [theme, setTheme] = useState(ligthTheme);

	const themeToggler = () => {
		theme === ligthTheme ? setTheme(darkTheme) : setTheme(ligthTheme);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<HeaderMain themeHandler={themeToggler} text="Change Theme" />
			</div>
		</ThemeProvider>
	);
}

export default App;
