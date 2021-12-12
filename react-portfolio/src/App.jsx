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
      <h1 className="App-body_projects-title">Some Projects</h1>
      <Projects></Projects>
      <h2 className="App-body_title">Skills</h2>
      <Skills></Skills>
      <footer>
        {theme==="light" ?
          <a href="https://anapaulacello.github.io/react-cv/" style={{ "color": "black" }}><h2>Check my CV!</h2></a>:
          <a href="https://anapaulacello.github.io/react-cv/" style={{ "color": "white" }}><h2>Check my CV!</h2></a>}
        <div className="social-media">
          <a href="https://www.linkedin.com/in/ana-paula-morales-dulzaides-813645218/">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40" height="40"
            viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#949494"><path d="M141.04,13.76h-110.08c-9.4944,0 -17.2,7.7056 -17.2,17.2v110.08c0,9.4944 7.7056,17.2 17.2,17.2h110.08c9.4944,0 17.2,-7.7056 17.2,-17.2v-110.08c0,-9.4944 -7.7056,-17.2 -17.2,-17.2zM58.48,68.8v65.36h-20.64v-65.36zM37.84,49.7768c0,-4.816 4.128,-8.4968 10.32,-8.4968c6.192,0 10.0792,3.6808 10.32,8.4968c0,4.816 -3.8528,8.7032 -10.32,8.7032c-6.192,0 -10.32,-3.8872 -10.32,-8.7032zM134.16,134.16h-20.64c0,0 0,-31.8544 0,-34.4c0,-6.88 -3.44,-13.76 -12.04,-13.8976h-0.2752c-8.3248,0 -11.7648,7.0864 -11.7648,13.8976c0,3.1304 0,34.4 0,34.4h-20.64v-65.36h20.64v8.8064c0,0 6.6392,-8.8064 19.9864,-8.8064c13.6568,0 24.7336,9.3912 24.7336,28.4144z"></path></g></g></svg>
          </a>
          <a href="https://github.com/anapaulacello">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40" height="40"
            viewBox="0 0 172 172"><g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero"></path><g fill="#949494" fill-rule="evenodd"><path d="M86,21.5c-35.63037,0 -64.5,28.86963 -64.5,64.5c0,28.4917 18.47656,52.6792 44.11279,61.20361c3.2334,0.58789 4.40918,-1.38574 4.40918,-3.10742c0,-1.53271 -0.06299,-5.58496 -0.08398,-10.95996c-17.95166,3.88428 -21.73096,-8.65039 -21.73096,-8.65039c-2.93945,-7.45361 -7.15967,-9.44824 -7.15967,-9.44824c-5.85791,-3.98926 0.44092,-3.90528 0.44092,-3.90528c6.4668,0.46192 9.86817,6.63477 9.86817,6.63477c5.75293,9.86817 15.09619,7.0127 18.77051,5.375c0.58789,-4.17822 2.26758,-7.01269 4.09424,-8.62939c-14.31934,-1.6167 -29.37354,-7.15967 -29.37354,-31.87207c0,-7.05469 2.51953,-12.80761 6.63477,-17.32178c-0.65088,-1.6167 -2.87646,-8.18848 0.62989,-17.06982c0,0 5.41699,-1.72168 17.7417,6.61377c5.14404,-1.42773 10.66602,-2.1416 16.14599,-2.16259c5.47998,0.02099 11.00195,0.73486 16.14599,2.16259c12.32471,-8.33545 17.7207,-6.61377 17.7207,-6.61377c3.52734,8.88134 1.32276,15.45313 0.65088,17.06982c4.13623,4.51416 6.61377,10.26709 6.61377,17.32178c0,24.77539 -15.0752,30.21338 -29.43653,31.83008c2.30957,1.97364 4.36719,5.9209 4.36719,11.92578c0,8.6294 -0.06298,15.5791 -0.06298,17.69971c0,1.72168 1.15478,3.7373 4.43017,3.10742c25.61523,-8.54541 44.0708,-32.71192 44.0708,-61.20361c0,-35.63037 -28.86963,-64.5 -64.5,-64.5z"></path></g></g></svg>
          </a>
          <a href='https://www.instagram.com/anapaulacello/'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="instagram"
            width="40" height="40"
            viewBox="0 0 172 172"
            fill="#000000"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
            <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#949494"><path d="M57.99646,18.8125c-21.60481,0 -39.18396,17.58952 -39.18396,39.19971v55.98608c0,21.6075 17.58952,39.18921 39.19971,39.18921h55.98608c21.6075,0 39.18921,-17.58952 39.18921,-39.19971v-55.99133c0,-21.60481 -17.58952,-39.18396 -39.19971,-39.18396zM126.3125,40.3125c2.967,0 5.375,2.408 5.375,5.375c0,2.967 -2.408,5.375 -5.375,5.375c-2.967,0 -5.375,-2.408 -5.375,-5.375c0,-2.967 2.408,-5.375 5.375,-5.375zM86,51.0625c19.26938,0 34.9375,15.66812 34.9375,34.9375c0,19.26938 -15.67081,34.9375 -34.9375,34.9375c-19.26938,0 -34.9375,-15.67081 -34.9375,-34.9375c0,-19.26669 15.66812,-34.9375 34.9375,-34.9375zM86,61.8125c-13.35956,0 -24.1875,10.82794 -24.1875,24.1875c0,13.35956 10.82794,24.1875 24.1875,24.1875c13.35956,0 24.1875,-10.82794 24.1875,-24.1875c0,-13.35956 -10.82794,-24.1875 -24.1875,-24.1875z"></path></g></g></svg>
          </a>
        </div>
      </footer>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
