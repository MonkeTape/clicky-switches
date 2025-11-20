"use client"
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


import { useEffect, useRef } from "react";

export default function MyThree() {
    const refContainer = useRef(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        const fov = 45;
        const aspect= window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 100;

        var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild( renderer.domElement );


        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        var geometry = new THREE.TorusGeometry(5, 2, 8, 6)

        var material = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: true ,
        });
        // var material = new THREE.MeshLambertMaterial({
        //     color: 0xFF0000,
        //     flatShading: true ,
        // });

        var volume = new THREE.Mesh(geometry, material);
        scene.add(volume);
        camera.position.z = 20;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 5, 0);
        controls.update();

        var animate = function () {
            requestAnimationFrame(animate);
            // volume.rotation.x += 0.01;
            // volume.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <div ref={refContainer}></div>

    );
}