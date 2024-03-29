'use strict';
/* jshint -W079 */

var dimroc = Object.assign(
  dimroc || {},
  (function() {
    if (dimroc.mobile) {
      return {
        gfx: {
          width: 160,
          height: 125
        }
      };
    } else {
      return {
        gfx: {
          width: 160,
          height: 125
        }
      };
    }
  })()
);

angular.extend(dimroc.gfx, {
  renderSpinningCube: function(canvas) {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(30, this.width / this.height, 1, 1000);
    camera.position.set(0, 4, 8);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    var scale = 2.5;
    var geometry = new THREE.BoxGeometry(scale, scale, scale);
    var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 1 });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var axisHelper = new THREE.AxisHelper(50);
    scene.add(axisHelper);

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(this.width, this.height);

    function animate() {
      requestAnimationFrame(animate, canvas);
      mesh.rotation.y += 0.008;
      renderer.render(scene, camera);
    }

    animate();
  }
});

