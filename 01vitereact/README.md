# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




// myApp - m should be in capital letter\
// component starts with capital letter

// We can only pass one argument in ReactDOM\
{/* <App /> */}\
// MyApp()\
// Instead of tags we can directly call the function, it will also work\
// so function is used as tags\

// React uses a bundler, which converts the returning html to a tree, which react understands\
// The tree like structure is like ReactElement1\
// jsx - javascript + html

// Since funcion are converted into tags, and tags into trees.\
// so what if directly pass the tree,

// <ReactElement1 /> doesn't work, because in this way ReactElement1 is expected to be a function, but it isn't\
// Also ReactElement1 is not a function, it is a object


// .render(anotherElement)\
// This is working, as we are passing a proper tag, and it is getting parsed into a tree or object\
// anotherElement() , <anotherElement /> will not work

// The problem with ReactElement1 is, it has different properties. Instead of type it can be typo, types or anything\
// so the key value properties of ReactElement1 is not of the react rules which would allow it to get parsed


// ReactElement2\
// This is woking, and this is created on the same basis of ReactElement1,\
// To make a element run on react, it should be creted using React.createElement (similar to document.createElement)\
// the type of reactelement1 is taken here directly as the first parameter,\
// then the second parameter for the props, taken as a object\
// and the third parameter is the children or the innerHTML, which gets appended to element created\
// also with the childElement we can inject variables\
// so this is in jsx form :- html + javascript\
// reference '.../customReact/customReact.js'\
// check App.jsx

#### babble helps to inject variables