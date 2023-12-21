import React from "react";
import ReactDOM from "react-dom";

//React.createElement => JS (Object) => HTMLElement(render) 

const heading = React.createElement("h1", {id: "heading"}, "hello world from react!");

console.log(heading);

//JSX - HTML-like language (NOT HTML inside React)

//JSX (transpiled before it reaches JS) - by Babel(PARCEL)

//JSX => React.createElement => JS Object => HTMLElement(render)

const jsxHeading = <h1>Namaste React by JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(jsxHeading); //takes the jsxheading object and creates the h1 element inside html 