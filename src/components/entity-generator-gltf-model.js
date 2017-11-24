/* global THREE */

/*
This a combinaison of entity-generator and gltf-model that loads the gltf model once,
and force upload the texture to the gpu to avoid frame drops the first
time an entity is rendered.
*/

import AFRAME from "aframe";

AFRAME.registerComponent("entity-generator-gltf-model", {
  schema: {
    mixin: { default: "" },
    num: { default: 10 },
    src: { type: "model" }
  },

  init: function() {
    this.model = null;
    this.loader = new THREE.GLTFLoader();
  },

  update: function() {
    const self = this;
    const el = this.el;
    const data = this.data;
    const src = this.data.src;

    // Create entities with supplied mixin.
    for (var i = 0; i < data.num; i++) {
      var entity = document.createElement("a-entity");
      entity.setAttribute("mixin", data.mixin);
      el.appendChild(entity);
    }

    if (!src) {
      return;
    }

    this.remove();

    this.loader.load(
      src,
      function gltfLoaded(gltfModel) {
        self.model = gltfModel.scene || gltfModel.scenes[0];
        self.model.animations = gltfModel.animations;
        // force upload texture to the gpu
        self.model.traverse(function(node) {
          if (node.isMesh) {
            const renderer = AFRAME.scenes[0].renderer;
            renderer.setTexture2D(node.material.map, 0);
          }
        });
        for (const child of el.childNodes) {
          // cloning mesh will keep the same material. This is what we want.
          child.setObject3D("mesh", self.model.clone());
        }
        el.emit("model-loaded", { format: "gltf", model: self.model });
      },
      undefined /* onProgress */,
      function gltfFailed(error) {
        var message =
          error && error.message ? error.message : "Failed to load glTF model";
        console.error(message);
        // warn(message);
        el.emit("model-error", { format: "gltf", src: src });
      }
    );
  },

  remove: function() {
    if (!this.model) {
      return;
    }
    for (const child of this.el.childNodes) {
      child.removeObject3D("mesh");
    }
  }
});
