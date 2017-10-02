## This is my sandbox with A-Frame

I publish some time to time a working version at
[https://vincentfretin.github.io/aframe-sandbox/](https://vincentfretin.github.io/aframe-sandbox/)
Be aware it can change at any moment. This is my sandbox after all.
This currently includes [my PR to teleport on generated ground and mushrooms](https://github.com/feiss/aframe-environment-component/pull/21)
and a fix for GearVR controller to highlight pressed buttons (now merged in master).

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
