// == 1. Creating Element in React with attributes

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement("h1",{id: "heading"},"Hello World from React!");

// // React.createElement returns an object which contains props and childrens
// console.log(heading);

// root.render(heading);



// == 2. Creating Nested Element in React

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *      </div>
 * </div>
 * 
 */

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement("h1",{},"I'm an h1 tag")
//     )
// );

// console.log(parent);

// root.render(parent);



// == 3. Creating Nested Element in React with Siblings

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag")
        ]
    )
);

console.log(parent);

root.render(parent);
