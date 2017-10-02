import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "aframe-teleport-controls";
import "aframe-environment-component";
import "aframe-physics-system";
import "aframe-extras";
import "aframe-event-set-component";
import "super-hands";
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
        <Entity environment="ground: canyon; groundYScale: 10; groundTexture: squares; dressing: mushrooms; dressingScale: 10; dressingAmount: 20" />
        {/* <a-box
          id="floorgeometry"
          static-body
          width="100"
          height="0.001"
          depth="100"
          visible="false"
        /> */}
        <a-entity
          static-body
          id="floorgeometry"
          position="0 0.15 0"
          // geometry="primitive: plane; width: 100; height: 100"
          // rotation="-90 0 0"
          geometry="primitive: box; width: 100; height: 0.001; depth: 100"
          visible="false"
        />
        <a-assets>
          {/* <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt=""
          /> */}
          {/* <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          /> */}

          <a-mixin
            id="cube"
            geometry="primitive: box; width: 0.33; height: 0.33; depth: 0.33"
            hoverable
            grabbable
            drag-droppable
            dynamic-body
          />
          <a-mixin
            id="cube-hovered"
            material="opacity: 0.7; transparent: true"
          />
          <a-mixin id="cube-dragover" material="wireframe: true;" />
        </a-assets>
        {/* <Entity obj-model="obj: #dyno-obj; mtl: #dyno-mtl" position="2 2 2" /> */}

        {/* <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
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
        {/* <Entity
          text={{ value: "Salut Michael!", align: "center" }}
          position={{ x: 0, y: 2, z: -1 }}
        /> */}

        <Entity
          dynamic-body
          hoverable
          grabbable
          drag-droppable
          geometry={{ primitive: "box" }}
          material={{ color: this.state.color, opacity: 0.6 }}
          position={{ x: 2, y: 1, z: -3 }}
          class="cube"
        />

        <Entity
          id="box"
          hoverable
          grabbable
          drag-droppable
          dynamic-body
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

        <a-entity
          class="cube"
          mixin="cube"
          position="0 0.265 -1"
          material="color: red"
        />
        <a-entity
          class="cube"
          mixin="cube"
          position="0 0.265 -0.5"
          material="color: red"
        />
        <a-entity
          class="cube"
          mixin="cube"
          position="-1 0.265 -1"
          material="color: blue"
        />
        <a-entity
          class="cube"
          mixin="cube"
          position="-1 0.265 -0.5"
          material="color: blue"
        />
        <a-entity
          class="cube"
          mixin="cube"
          position="1 0.265 -1"
          material="color: green"
        />
        <a-entity
          class="cube"
          mixin="cube"
          position="1 0.265 -0.5"
          material="color: green"
        />

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
          {/* <a-camera universal-controls="movementControls: gamepad" /> */}
          <a-camera />
          {/* <a-entity camera look-controls /> */}
          <a-entity
            class="right-controller"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; collisionEntities: [class='cube'], #floorgeometry"
            teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 200; type: line; collisionEntities: .environmentGround, .environmentDressing, .cube"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 20; type: line; collisionEntities: .environmentGround, .environmentDressing, .cube"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 20; type: line; collisionEntities: #floorgeometry"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 20; type: line; collisionEntities: .environmentGround, .cube"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 20; type: line; collisionEntities: .environmentGround, .cube, #floorgeometry"
            // teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 20; type: line; collisionEntities: [class='cube'], [class='environmentGround']"
            // gearvr-controls
            laser-controls
            raycaster="objects: .cube"
            // line="color: red; opacity: 0.75"
            super-hands
          />
        </a-entity>
      </Scene>
    );
  }
}
export default App;
