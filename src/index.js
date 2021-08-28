import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    

    function handleKeyDown(event) {
      if (event.keyCode === 40) {
        //40 is down arrow
        window.isDDown = true;
      } else if (event.keyCode === 38) {
        //up arrow
        window.isUDown = true;
      } else if (event.keyCode === 37) {
        //37 is left arrow
        window.isLDown = true;
      } else if (event.keyCode === 39) {
        //39 is right arrow
        window.isRDown = true;
      }
    }

    function handleKeyUp(event) {
      if (event.keyCode === 40) {
        window.isDDown = false;
      } else if (event.keyCode === 38) {
        window.isUDown = false;
      } else if (event.keyCode === 37) {
        window.isLDown = false;
      } else if (event.keyCode === 39) {
        window.isRDown = false;
      }
    }
   
    window.addEventListener("keydown", handleKeyDown, false);
    window.addEventListener("keyup", handleKeyUp, false);

    var animate = function () {
      requestAnimationFrame(animate);

      //  requestAnimationFrame(animate);
  if (window.isDDown) {
    cube.rotation.x += 0.01;
  } else if (window.isUDown) {
    cube.rotation.x -= 0.01;
  } else if (window.isLDown) {
    cube.rotation.y -= 0.01;
  } else if (window.isRDown) {
    cube.rotation.y += 0.01;
  }

      renderer.render(scene, camera);
    };
  
    
    

    animate();

    
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
  

}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
