"use client"
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { useEffect, useRef } from "react";


const Globe = () => {
    const refContainer = useRef(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        const w = window.innerWidth;
        const h = window.innerHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setSize(w, h);
        refContainer.current && refContainer.current.appendChild( renderer.domElement );
        const fov = 75;
        const aspect= w / h;
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;
        const scene = new THREE.Scene();

        const earthGroup = new THREE.Group();
        earthGroup.rotation.z = -23.4 * Math.PI / 180;
        new OrbitControls(camera, renderer.domElement);
        const loader = new THREE.TextureLoader();
        const detail = 12;
        const sphere_geo = new THREE.IcosahedronGeometry(1, detail)
        const earth_mat = new THREE.MeshStandardMaterial({
            map: loader.load('./globe_textures/earthmap1k.jpg')
        });

        const earth = new THREE.Mesh(sphere_geo, earth_mat);
        earthGroup.add(earth);
        scene.add(earthGroup);

        // const lightsMat = new THREE.MeshStandardMaterial({
        //     map:loader.load('./globe_textures/earthlights1k.jpg'),
        //     blending: THREE.AdditiveBlending,
        // })
        // const lightsMesh = new THREE.Mesh(sphere_geo, lightsMat);
        // earthGroup.add(lightsMesh);


        const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
        sunLight.position.set(-2, 0.5, 1);
        scene.add(sunLight)

        function animate() {
            requestAnimationFrame(animate);

            earthGroup.rotation.y += 0.003;
            renderer.render(scene, camera);
        }
        animate()


    }, [])

    return (
        <div ref={refContainer}></div>
    )
}
export default Globe
