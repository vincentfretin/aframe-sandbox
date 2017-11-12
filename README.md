## This is my sandbox with A-Frame

I publish some time to time a working version at
[https://vincentfretin.github.io/aframe-sandbox/](https://vincentfretin.github.io/aframe-sandbox/)

Be aware it can change at any moment. This is my sandbox after all.
I currently use branches of several modules, see `workspaces-install.sh`.

Current things you can do in the environment:

- teleport on the ground, dressing, big cube, voxels with the trigger button on GearVR
- grab the fireball and small cubes with trackpad touch (just touch, not click)
- click on the big cube to change its color
- create voxels on trackpad click on the first pink voxel on your left

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

For an example how to configure webpack with glsify-loader to use a custom
shader, see [this commit](
https://github.com/vincentfretin/aframe-sandbox/commit/9b3e6ff088599910a673de7b24f19b390a5c9689)

### Installation

To get started:

```bash
./workspaces-install.sh
yarn
# to modify aframe source code, replace `"main": "dist/aframe-master.js"` by `"main": "src/index.js"` in `node_modules/aframe/package.json`
# edit node_modules/aframe/src/components/look-controls.js and comment `this.controls.userHeight = this.getUserHeight();`
npm start
```

### Run it with GearVR

On Ubuntu, allow the the 3000 port with `ufw allow 3000`
Get your machine ip with `iconfig`.
Be sure your phone is on the same network as your machine, via wifi.
Put on your headset, open Oculus browser and type `http://192.168.1.24:3000`
(change the ip by yours). You really need to type `http://` yourself, otherwise
it doesn't load.

### publish to GitHub Pages

To publish to GitHub Pages:

```bash
npm run publish
```
