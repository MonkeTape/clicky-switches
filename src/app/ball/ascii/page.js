"use client"
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';



import { useEffect, useRef } from "react";

export default function MyThree() {
    const refContainer = useRef(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        const w = window.innerWidth;
        const h = window.innerHeight;

        var renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setSize(w, h);

        const effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } )
        effect.setSize(w, h);
        // asciiWindow.domElement.style.color = 'white';
        // asciiWindow.domElement.style.backgroundColor = 'black';

        // refContainer.current && refContainer.current.appendChild( renderer.domElement );
        refContainer.current && refContainer.current.appendChild( effect.domElement );



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
        wireMesh.scale.setScalar(1.001);
        mesh.add(wireMesh);


        const pointLight1 = new THREE.PointLight( 0xffffff, 3, 0, 0 );
        pointLight1.position.set( 500, 500, 500 );
        scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
        pointLight2.position.set( - 500, - 500, - 500 );
        scene.add( pointLight2 );

        // const controls = new OrbitControls(camera, renderer.domElement);
        const controls = new OrbitControls(camera, effect.domElement);

        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        function animate(t = 0) {
            requestAnimationFrame(animate);
            mesh.rotation.y = (t * 0.0001)

            controls.update();
            effect.render(scene, camera);
        }

        animate();

    }, []);
    return (
        <div ref={refContainer}></div>

    );
}