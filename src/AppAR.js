// import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "aframe-teleport-controls";
import "aframe-environment-component";
// import "three.ar.js";
// import "aframe-ar";
// import { Entity, Scene } from "aframe-react";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor() {
    const colors = ["red", "orange", "yellow", "green", "blue"];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <a-scene ar>
        {/* <Entity environment="preset: forest; dressingAmount: 20" /> */}
        <a-assets>
          <a-asset-item
            id="dyno-obj"
            src={require("./assets/dyno/model.obj")}
          />
          <a-asset-item
            id="dyno-mtl"
            src={require("./assets/dyno/materials.mtl")}
          />
          <a-asset-item
            src="https://cdn.glitch.com/843c8e83-ac9e-499e-8aba-1332cd1fe4a6%2Fsilogo.mtl?1502470550479"
            id="samsung-internet-mtl"
          />
          <a-asset-item
            src="https://cdn.glitch.com/843c8e83-ac9e-499e-8aba-1332cd1fe4a6%2Fsilogo_small.obj?1502705824920"
            id="samsung-internet-obj"
          />
        </a-assets>
        {/* <!-- Use AR raycaster, and set raycaster to ignore all A-Frame objects like logos. --> */}
        <a-entity ar-raycaster raycaster="objects:none" />
        {/* <!-- Declare a ring to use as the raycaster intersection mark. --> */}
        <a-ring
          id="mark"
          rotation="-90 0 0"
          radius-inner="0.01"
          radius-outer="0.02"
        />

        {/* <a-entity obj-model="obj: #dyno-obj; mtl: #dyno-mtl" position="2 2 2" /> */}

        <a-entity primitive="a-light" type="ambient" color="#445451" />
        {/* <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        /> */}

        <a-entity
          text={{ value: "Salut Michael!", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <a-entity
          id="box"
          geometry={{ primitive: "box" }}
          material={{ color: this.state.color, opacity: 0.6 }}
          // animation__rotate={{
          //   property: "rotation",
          //   dur: 2000,
          //   loop: true,
          //   to: "360 360 360"
          // }}
          // animation__scale={{
          //   property: "scale",
          //   dir: "alternate",
          //   dur: 100,
          //   loop: true,
          //   to: "1.1 1.1 1.1"
          // }}
          position={{ x: 0, y: 1, z: -3 }}
          events={{ click: this.changeColor.bind(this) }}
        >
          <a-entity
            // animation__scale={{
            //   property: "scale",
            //   dir: "alternate",
            //   dur: 100,
            //   loop: true,
            //   to: "2 2 2"
            // }}
            geometry={{ primitive: "box", depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: "#24CAFF" }}
          />
        </a-entity>

        {/* <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: "scale",
              startEvents: "click",
              from: "0.1 0.1 0.1",
              to: "1 1 1",
              dur: 150
            }}
          />
        </Entity> */}
      </a-scene>
    );
  }
}
export default App;
