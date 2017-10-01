## This is my sandbox with aframe

The initial commit of this repo is actually
ngokevin's [aframe-react-boilerplate](https://github.com/ngokevin/aframe-react-boilerplate)
where I did the following to be able to use hot reloading properly:

    npm run eject
    yarn add react-hot-loader@^3.0.0-beta.7

add to package.json:

    "babel": {
      "presets": [
        "react-app"
      ],
      "plugins": [
        "react-hot-loader/babel"
      ]
    }

and configure hot module reloading in `src/index.js`

The `npm run eject` was needed only to take into account the new babel config
in package.json.

### Installation

To get started:

```bash
yarn
npm start
```

To publish to GitHub Pages:

```bash
npm run publish
```
