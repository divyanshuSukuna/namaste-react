import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {id: "heading"}, "hello world from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading); //takes the heading object and creates the h1 element inside html 