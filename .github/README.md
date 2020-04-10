# React-TS-PWA

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Implementation Details

Template CRA PWA, with TS, SCSS and customized CI/CD environment.

You can find all the relevant details about what is included in this repo here: https://www.notion.so/kiilysden/React-TS-PWA-0ff8c6be6ae249bbbf3baebcf54703d9

# Getting started:

By default, this project uses `yarn 2` (`berry`) to manage modules. Feel free to switch to `npm` if more convenient.

`yarn install`

## Make it your own:

This template has been prepopulated with some variables to act as placeholders for things that should be changed when creating a new app.

`META_TITLE` --> the title of the app in `index.html` and short_name in `manifest.json`.

`META_PWA_NAME`--> the name of the app in `manifest.json`

`META_DESCRIPTION` --> the description of the app in `index.html` and `manifest.json`.

`META_LONG_TITLE` --> the long title for the app in `manifest.json`.

Lastly, don't forget to change the relevant fields in `package.json`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
