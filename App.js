





const parent = React.createElement(
    "div",
    { id: "parent" },
    // "i am parent"
    [React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h2", { id: "child1" }, "i am child~1"),
        React.createElement("h3", { id: "child2" }, "i am child~2")]
    ),
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h2", { id: "child1" }, "i am uncle"),
        React.createElement("h3", { id: "child2" }, "i am aunty")]
    )]
);




const heading = React.createElement(
    "h1",
    { id: "heading" },// {} -> attribute to a class (eg:id)
    "hello world");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);