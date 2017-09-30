// import "aframe";
// import "babel-polyfill";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "aframe-teleport-controls";
import "aframe-environment-component";
import { Entity, Scene } from "aframe-react";
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
      <Scene>
        <Entity environment="ground: canyon; groundYScale: 10; groundTexture: squares; dressing: mushrooms; dressingScale: 8; dressingAmount: 0" />
        <a-assets>
          {/* <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt=""
          /> */}
          {/* <a-asset-item
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
          <a-asset-item
            id="dyno-obj"
            src={require("./assets/dyno/model.obj")}
          />
          <a-asset-item
            id="dyno-mtl"
            src={require("./assets/dyno/materials.mtl")}
          /> */}
        </a-assets>
        {/* <Entity obj-model="obj: #dyno-obj; mtl: #dyno-mtl" position="2 2 2" /> */}

        {/* <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        /> */}
        {/* <a-entity
          id="floorgeometry"
          position="0 0.15 0"
          geometry="primitive: plane; width: 100; height: 100"
          rotation="-90 0 0"
        /> */}
        {/* <Entity primitive="a-light" type="ambient" color="#445451" /> */}
        {/* <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        /> */}
        {/* <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        /> */}
        {/* <Entity particle-system={{ preset: "snow", particleCount: 2000 }} /> */}
        <Entity
          text={{ value: "Salut Michael!", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: this.state.color, opacity: 0.6 }}
          position={{ x: 2, y: 1, z: -3 }}
          class="cube"
        />

        <Entity
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
          class="cube"
        >
          <Entity
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
        </Entity>

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

        <a-entity id="cameraRig">
          {/* <a-entity wasd-controls look-controls /> */}
          <a-camera />
          {/* maxLength: 20; type: line; */}
          {/* collisionEntities: [class='cube'], #floorgeometry */}
          <a-entity
            teleport-controls="cameraRig: #cameraRig; maxLength: 20; type: line; button: trigger;"
            gearvr-controls
            laser-controls
            line="color: red; opacity: 0.75"
          />
        </a-entity>
      </Scene>
    );
  }
}
export default App;
