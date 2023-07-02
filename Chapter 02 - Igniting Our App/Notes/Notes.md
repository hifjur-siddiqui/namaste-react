# Chapter 02 - Ignite Our App

## Setup node project for react  -

```sh
npm init
npm install react react-dom
npm install -D parcel
```

## Points to remember -

- `node.js` is a runtime environment for javascript outside browsers.
- `npm` is a package manager for managing javascript dependencies.
- `npm` stands for anything but not Node Package Manager.
- `package.json` contains configuration for the `npm` to add in our projects.
- `package.lock.json` keeps record of exact version of dependencies which were used at the time of project setup. It's a good practice to have this file on git also.
- `Dependencies` are of two type: 
    - A. Normal Dependencies - These are dependencies required at runtime of project.
    - B. Developer Dependencies - These are helpers for packaging our code. Not required at runtime for project.
- `^` is used for minor updates while `~` is used for major updates.
- `Bundlers` are used to package our code and make it production ready. Some of the bundlers are `vite, parcel, webpack`.
- `Parcel` makes our code production ready. We need to remove `main` as starting point in `package.json` if we want to use parcel.
- `Babel` is transpiler which is used to make our code backwards compatible to support old version of browsers as well. It is used by parcel behind the scenes. We can add `browserslist` configuration in our package.json to tell what versions to support. [Browserslist Documentation](https://browserslist.dev)
- `.gitignore` file is used to ignore the files which you don't want to push to git. This helps to avoid heavy files on git.

## Using parcel for development and production  -

- Development:
```sh
npx parcel index.html
```

- Production:
```sh
npx parcel build index.html
```

