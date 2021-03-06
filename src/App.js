import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";
import "aframe-teleport-controls";
import "aframe-environment-component";
import "aframe-fps-counter-component";
import "aframe-physics-system";
// import "aframe-extras";
import "aframe-event-set-component";
import "aframe-4dof-controls-component";
import "super-hands";
import "aframe-randomizer-components";
import "aframe-entity-generator-component";
import "aframe-look-at-component";
import { Entity, Scene } from "aframe-react";
import React from "react";
import "./components/material-displacement";
import "./components/snap";
import "./components/intersection-spawn";
import "./components/entity-generator-gltf-model";

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
      <Scene physics="debug:true">
        {/* <Scene> */}
        <Entity environment="ground: canyon; groundYScale: 10; groundTexture: squares; dressing: mushrooms; dressingScale: 10; dressingAmount: 20" />
        {/* <a-box
          id="floorgeometry"
          static-body
          width="100"
          height="0.001"
          depth="100"
          visible="false"
        /> */}
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

          {/* <a-asset-item id="bird-obj" src="/CactusWren/CactusWren.obj" /> */}
          <a-asset-item id="bird-obj" src="/CactusWren/CactusWren.glb" />

          <a-mixin
            id="bird"
            // gltf-model="#bird"
            // obj-model="obj: #bird-obj"
            // material="color: #645146"
            scale="0.1 0.1 0.1"
            random-position="min: -5 0 -5; max: 5 0 5"
            look-at="#cameraRig"
          />

          <a-mixin
            id="cube"
            geometry="primitive: box; width: 0.33; height: 0.33; depth: 0.33"
            hoverable
            grabbable
            draggable
            droppable
            dynamic-body
            event-set__hover-start="material.opacity: 0.7"
            event-set__hover-end="material.opacity: 1.0"
            event-set__dragover-start="material.wireframe: true"
            event-set__dragover-end="material.wireframe: false"
          />

          <a-mixin
            id="voxel"
            geometry="primitive: box; width: 0.5; height: 0.5; depth: 0.5"
            intersection-spawn="event: click; mixin: voxel; material.color: green"
            snap="offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"
            event-set__mouseenter="material.opacity: 0.7"
            event-set__mouseleave="material.opacity: 1.0"
          />
        </a-assets>

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
          material="color: red"
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
          material="color: yellow"
        />

        <a-entity mixin="voxel" position="-3 0 -3" material="color: pink" />

        <a-sphere
          material-displacement
          position="2 1 -3"
          radius="0.4"
          segments-height="18"
          segments-width="36"
          // wireframe="true"
          hoverable
          grabbable
          draggable
          droppable
          dynamic-body
        />

        <a-entity entity-generator-gltf-model="mixin: bird; num: 30; src: #bird-obj" />

        {/* <a-camera universal-controls="movementControls: gamepad" /> */}
        <a-entity
          id="cameraRig"
          progressive-controls="objects: .cube,[mixin='voxel'],[grabbable]"
        >
          <a-camera user-height="1.6" />
          <a-entity
            class="right-controller"
            cursor="fuse: false; downEvents: trackpaddown; upEvents: trackpadup"
            // hand-4dof-controls="target: #hand"
            teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 200; type: line; landingMaxAngle: 135; collisionEntities: .environmentGround, .environmentDressing, .cube, [mixin='voxel']"
          >
            <a-entity fps-counter="for90fps: false" position="0 0 -1" />
            {/* <a-entity
              id="hand"
              material="color: #f33"
              geometry="primitive: icosahedron; detail: 0; radius: 0.05"
            /> */}
          </a-entity>
        </a-entity>
        {/* <a-entity id="cameraRig">
          <a-camera user-height="1.6" />
          <a-entity
            class="right-controller"
            teleport-controls="cameraRig: #cameraRig; button: trigger; maxLength: 200; type: line; collisionEntities: .environmentGround, .environmentDressing, .cube, [mixin='voxel']"
            // gearvr-controls
            laser-controls
            raycaster="objects: .cube,[grabbable]"
            // line="color: red; opacity: 0.75"
            super-hands="colliderEvent: raycaster-intersection; colliderEventProperty: els; colliderEndEvent: raycaster-intersection-cleared; colliderEndEventProperty: clearedEls; colliderState:"
            static-body="shape: sphere; sphereRadius: 0.02"
          />
        </a-entity> */}
      </Scene>
    );
  }
}
export default App;
