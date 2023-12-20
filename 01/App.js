const heading = React.createElement("h1", {id: "heading"}, "hello world from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object

root.render(heading); //takes the heading object and creates the h1 element inside html 