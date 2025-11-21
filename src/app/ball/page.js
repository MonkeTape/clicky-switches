"use client"
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


import { useEffect, useRef } from "react";

export default function MyThree() {
    const refContainer = useRef(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        const w = window.innerWidth;
        const h = window.innerHeight;

        var renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setSize(w, h);
        refContainer.current && refContainer.current.appendChild( renderer.domElement );

        // in degrees!
        const fov = 75;
        const aspect= w / h;
        // minimum distance to render
        // anything less than this won't be rendered
        const near = 0.1;
        // maximum distance to render
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();


        const geo = new THREE.IcosahedronGeometry(1.0, 2)
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            flatShading: true
        });
        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
        });
        const wireMesh = new THREE.Mesh(geo, wireMat);
        // scale it up so the wireMesh intersects less with the main mesh
        // makes it less flicker-y
        wireMesh.scale.setScalar(1.001);
        // add it as a child to the mesh so it picks up the animations later
        mesh.add(wireMesh);


        const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
        hemiLight.position.y = 2
        scene.add(hemiLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        // controls.target.set(0, 0, 0);

        function animate(t = 0) {
            requestAnimationFrame(animate);
            mesh.rotation.y = (t * 0.0001)
            
            controls.update();
            renderer.render(scene, camera);
        }

        animate();

    }, []);
    return (
        <div ref={refContainer}></div>

    );
}