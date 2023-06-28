/*
*   <div id="parent">
        <div id="child">
            <h1>I'm a h1 tag </h1>
            <h2>I'm a h2 tag </h2>
        </div>
        <div id="child">
            <h1>I'm a h1 tag </h1>
            <h2>I'm a h2 tag </h2>
        </div>
    </div>
*
*/

/*
ReactElement(Object) => HTML(Browser Understands)

*/
import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste React"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

//JSX

/*const heading = React.createElement(
    "h1", 
    {id: "heading", xyz:"abc"}, 
    "Hello World from React!"
    );*/

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
