"use client";
import * as THREE from "three";
//will allow us to import blender GLB and GLTF models
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { useEffect, useRef } from "react";

export default function Frog() {
  const refContainer = useRef(null);

  useEffect(() => {
    // const gltf = async () => await loader.loadAsync("/Froggy.glb");
    var scene = new THREE.Scene();
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;

    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    const loader = new GLTFLoader();
    loader.load(
      //using this type of loader pattern could cause scoping issues. Promise Hell.
      "/Froggy.glb", // Assuming froggy is directly in the public folder
      (gltf) => {
        gltf.scene.scale.multiplyScalar(0.05);
        scene.add(gltf.scene);
        camera.lookAt(gltf.scene.position);
        // because of promises.

        console.log("loaded model");
        // Add the loaded model to your scene

        const redLineMaterial = new THREE.LineBasicMaterial({
          color: 0xff0000,
        }); //Red Line
        const greenLineMaterial = new THREE.LineBasicMaterial({
          color: 0x00ff00,
        }); //Green Line
        const blueLineMaterial = new THREE.LineBasicMaterial({
          color: 0x0000ff,
        }); //Blue Line

        const origin = new THREE.Vector3(0, 0, 0);
        const geoRedPoints = [];
        geoRedPoints.push(origin);
        geoRedPoints.push(new THREE.Vector3(2, 0, 0));
        const geoRedLine = new THREE.BufferGeometry().setFromPoints(
          geoRedPoints
        );

        const geoGreenPoints = [];
        geoGreenPoints.push(origin);
        geoGreenPoints.push(new THREE.Vector3(0, 2, 0));
        const geoGreenLine = new THREE.BufferGeometry().setFromPoints(
          geoGreenPoints
        );

        const geobluePoints = [];
        geobluePoints.push(origin);
        geobluePoints.push(new THREE.Vector3(0, 0, 2));
        const geoBlueLine = new THREE.BufferGeometry().setFromPoints(
          geobluePoints
        );

        const redLine = new THREE.Line(geoRedLine, redLineMaterial);
        const greenLine = new THREE.Line(geoGreenLine, greenLineMaterial);
        const blueLine = new THREE.Line(geoBlueLine, blueLineMaterial);

        scene.add(redLine);
        scene.add(greenLine);
        scene.add(blueLine);

        // const light = new THREE.AmbientLight(0xfffff0, Math.PI); // soft white light
        // scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xfff8dc, Math.PI);
        directionalLight.position.y = 10;
        directionalLight.position.x = 10;
        directionalLight.position.z = 20;
        directionalLight.lookAt(origin);

        scene.add(directionalLight);
        renderer.render(scene, camera);
        var animate = function () {
          requestAnimationFrame(animate);
          //gltf.scene.rotation.x += 0.1;
          gltf.scene.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the GLB model:", error);
      }
    );

    // scene.add(gltf.scene);
  }, []);
  return <div ref={refContainer}></div>;
}
