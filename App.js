


import React from "react";
import ReactDOM from "react-dom/client";

// //core react.
// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React"
// );


// //JSX -> xml/html like syntax.
// //transpile before it reaches to js engine. parsel use bable

// const jasxheading = <h1 id="heading"> namaste React jsx</h1>

//--------------------------------------------------------------------------

//react element
const title = (
    <h1 id="Title">
        Title react element
    </h1>
);

//js
const num = 1000;
//react component
const Title = () => (
    <h1 id="Title">
        Title....
    </h1>
);
const HeadFn = () => (
    <h1 id="heading">
        <h1>{num - 200}</h1>
        {title}
        <Title />
        {Title()}
        namaste React component
    </h1>
);




const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jasxheading);
// root.render(title);

root.render(<HeadFn />);