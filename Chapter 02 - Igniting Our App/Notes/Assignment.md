# Chapter 02 - Ignite Our App

## Q1. What is `NPM`?
A: `NPM` is the default package manager for javascript's runtime Node JS. It consists of two things:
    - A. CLI - for downloading and publishing packages
    - B. Online Repository - that hosts javascript packages

## Q2. What is `Parcel/Webpack`? Why `do we need it`?
A: `Parcel/Webpack` are bundlers that make our code production ready by adding features and optimizing our code.

- `Parcel` features:
    - Dev build and creates local server
    - HMR (Hot Module Replacement)
    - File Watching Algo in C++
    - Caching (Faster build)
    - Image Optimization
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling (Support Old Browsers)
    - Diagnostics
    - Error Handling
    - HTTPS
    - Tree Shaking (Remove Unused Code)
    - Different Dev and Prod Build

## Q3. What is `.parcel-cache`?
A: These are the cache files created by parcel caching algorithm. It helps to speed up bundling process.

## Q4. What is `npx`?
A: It is used to execute packages without needing them to install.

## Q5. What is `difference` between `dependencies` vs `devDependencies`?
A. `dependencies` - These are dependencies required at runtime of project. `devDependencies` - These are helpers for packaging our code. Not required at runtime for project.

## Q6. What is `Tree Shaking`?
A. `Tree Shaking` is a mechanism to remove unwanted part of code while bunlding.

## Q7. What is `Hot Module Replacement`?
A. `Hot Module Replacement` is a mechanism of add, exchange or remove modules while the web application is running without the need for reloading.

## Q8. List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your
own words.
A. `Parcel` features:
    - Dev build and creates local server
    - HMR (Hot Module Replacement)
    - File Watching Algo in C++
    - Caching (Faster build)
    - Image Optimization
    - Minification
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling (Support Old Browsers)
    - Diagnostics
    - Error Handling
    - HTTPS
    - Tree Shaking (Remove Unused Code)
    - Different Dev and Prod Build

## Q9. What is `.gitignore`? What should `we add` and `not add` into it?
A. `.gitignore` file is used to ignore the files which you don't want to push to git. This helps to avoid heavy files on git. We should include code and configuration in the git and ignore the parts of code which can be re-generated if we have the part of code from git.

## Q10. What is the `difference` between `package.json` and `package-lock.json`?
A. `package.json` contains configuration for the `npm` to add in our projects. `package.lock.json` keeps record of exact version of dependencies which were used at the time of project setup. It's a good practice to have this file on git also.

## Q11. Why should I not modify `package-lock.json`?
A. `package.lock.json` contains track of what dependencies were used at time of build. If we change this file code might break and run into issues.

## Q12. What is `node_modules` ? Is it a `good idea to push that on git`?
A. `node_modules` is folder created for dependencies when you install them. It's not a good idea to include this inside git as there are large files and the other thing is that it can be reconstructed using `package.json` file.

## Q13. What is the `dist` folder?
A. `dist` folder is the folder which contains the production build code.

## Q14. What is `browserlists`?
A. We can add `browserslist` configuration in our package.json to tell what versions to support.