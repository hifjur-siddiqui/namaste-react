# Chapter 01 - Inception

## Q: What is `Emmet`?
A: `Emmet` is a plugin for text-editors which gives you functionality to write short snippets and expand to write full code.

## Q: Difference between a `Library and Framework`?
A: `Library` implements a basic function eg. React and jQuery whereas `Framework` is collection of libraries to implement a particular methodology eg. Angular, Vue. This means the developer decides when to call the library. However, when we use a framework, the framework decides when to call the library.

We can use react even for parts of pages independently while a framework requires the full part of the app to change.

## Q: What is `CDN`? Why do we `use` it?
A: A `content delivery network (CDN)` is a network of interconnected servers that speeds up webpage loading for data-heavy applications. The primary purpose of a `content delivery network (CDN)` is to reduce latency, or reduce the delay in communication created by a network's design.

## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. 
It is used when we want to share the resources across domains in a secured manner.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: `React` is used for creating elements or building UI in react whereas `ReactDOM` lets to interact with DOM.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: The difference is in the build type of the library. The development version is used when doing the development so that we can debug if wanted while the production version is production ready and used for deployment to improve the performance.

## Q: What is `async and defer`?
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="script.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="script.js" defer></script>
```