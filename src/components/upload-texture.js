/* global THREE */

import AFRAME from "aframe";

AFRAME.registerComponent("upload-texture", {
  init: function() {
    const el = this.el;

    el.addEventListener("model-loaded", () => {
      const renderer = AFRAME.scenes[0].renderer;
      el.object3D.traverse(function(node) {
        if (node.isMesh) {
          renderer.setTexture2D(node.material.map, 0);
        }
      });
    });
  }
});
