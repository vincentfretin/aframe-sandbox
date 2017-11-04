/* global THREE */
// copied from https://github.com/ngokevin/kframe/blob/csstricks/scenes/aincraft/components/intersection-spawn.js
// added a condition to ignore click MouseEvent that don't have detail.intersection coming from the fake click event in super-hands
// and fix snap.offset to take into account intersection face normal
// see https://aframe.io/docs/master/guides/building-a-minecraft-demo.html
import AFRAME from "aframe";
/**
 * Spawn entity at the intersection point on click, given the properties passed.
 *
 * `<a-entity intersection-spawn="mixin: box; material.color: red">` will spawn
 * `<a-entity mixin="box" material="color: red">` at intersection point.
 */
AFRAME.registerComponent("intersection-spawn", {
  schema: {
    default: "",
    parse: AFRAME.utils.styleParser.parse
  },

  init: function() {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.event, evt => {
      if (!evt.detail.intersection) {
        // The browser emits a click MouseEvent after the cursor component emits the mouseup event.
        // We ignore it because it doesn't have detail.intersection.
        // We are only interested by the click CustomEvent fired by the cursor component.
        return;
      }
      // Create element.
      const spawnEl = document.createElement("a-entity");

      // Snap intersection point to grid and offset from center.
      spawnEl.setAttribute("position", evt.detail.intersection.point);

      // Set components and properties.
      Object.keys(data).forEach(name => {
        if (name === "event") {
          return;
        }
        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
      });
      // fix snap.offset to take into account the intersection face normal
      // TODO: not the best fix because we hard code snap.offset value here.
      const offset = new THREE.Vector3(0.25, 0.25, 0.25);
      // Normally, we should have the snap component added to the spawnEl because
      // we added the voxel mixin above, but this is not the case, I get
      // TypeError: Cannot read property 'offset' of null
      // const offset = AFRAME.utils.entity.getComponentProperty(spawnEl, "snap.offset");
      if (evt.detail.intersection.face.normal.x === -1) {
        offset.x = -offset.x;
      } else if (evt.detail.intersection.face.normal.y === -1) {
        offset.y = -offset.y;
      } else if (evt.detail.intersection.face.normal.z === -1) {
        offset.z = -offset.z;
      }
      AFRAME.utils.entity.setComponentProperty(spawnEl, "snap.offset", offset);

      // Append to scene.
      el.sceneEl.appendChild(spawnEl);
    });
  }
});
