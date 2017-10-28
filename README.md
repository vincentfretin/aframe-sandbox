## This is my sandbox with A-Frame

I publish some time to time a working version at
[https://vincentfretin.github.io/aframe-sandbox/](https://vincentfretin.github.io/aframe-sandbox/)

Be aware it can change at any moment. This is my sandbox after all.
I currently use branches of several modules, see `package.json`.

Current things you can do in the environment:

- teleport on the ground, dressing and cubes with the trigger button on GearVR
- grab small cubes with trackpad button (just touch, no need to click)
- grab a fireball!
- click on the big cube with a small cube inside it to change the color of the two big cubes

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
# to modify aframe source code, replace `"main": "dist/aframe-master.js"` by `"main": "src/index.js"` in `node_modules/aframe/package.json`
# to be able to teleport on ground, edit `node_modules/aframe-teleport-controls/index.js` and `return true` in `isValidNormalsAngle`
npm start
```

To publish to GitHub Pages:

```bash
npm run publish
```
