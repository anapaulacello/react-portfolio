import './App.scss';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import React, { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider className="App" theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
      <StyledApp className="App-body">
      <div className="change-theme-button" onClick={() => themeToggler()}>
      {theme==="light" ?<p className="moon-sun">🌑</p>:<p className="moon-sun">☀️</p>}
      </div>
      {theme === "dark" ?
      <h1 className="App-body_title" style={{ "color": "white" }}>Hi, I'm Ana Paula!</h1>:<h1 className="App-body_title" style={{ "color": "black" }}>Hi, I'm Ana Paula!</h1>}
      {theme === "dark" ?
      <h4 className="App-body_title-two" style={{ "color": "white" }}>Junior Web Developer</h4>:<h4 className="App-body_title-two" style={{ "color": "black" }}>Junior Web Developer</h4>}
      <a className="button" role="button" href="mailto:anapauamoralesdulzaides@gmail.com">contact me</a>
      <Projects></Projects>
      <h2 className="App-body_title">Skills</h2>
      <Skills></Skills>
      <footer>
        <div className="social-media">
            <a><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="instagram"
  width="64" height="64"
  viewBox="0 0 172 172"
  fill="#000000"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
  <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d9b0ff"><path d="M57.99646,18.8125c-21.60481,0 -39.18396,17.58952 -39.18396,39.19971v55.98608c0,21.6075 17.58952,39.18921 39.19971,39.18921h55.98608c21.6075,0 39.18921,-17.58952 39.18921,-39.19971v-55.99133c0,-21.60481 -17.58952,-39.18396 -39.19971,-39.18396zM126.3125,40.3125c2.967,0 5.375,2.408 5.375,5.375c0,2.967 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375zM86,51.0625c19.26938,0 34.9375,15.66812 34.9375,34.9375c0,19.26938 -15.67081,34.9375 -34.9375,34.9375c-19.26938,0 -34.9375,-15.67081 -34.9375,-34.9375c0,-19.26669 15.66812,-34.9375 34.9375,-34.9375zM86,61.8125c-13.35956,0 -24.1875,10.82794 -24.1875,24.1875c0,13.35956 10.82794,24.1875 24.1875,24.1875c13.35956,0 24.1875,-10.82794 24.1875,-24.1875c0,-13.35956 -10.82794,-24.1875 -24.1875,-24.1875z"></path></g></g></svg></a>
          <a></a>
          <a></a>
        </div>
      </footer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
