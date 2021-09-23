import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let pluto,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(9,128,128,4,6.3);
    const textura = new THREE.TextureLoader().load("images/plutomap.jpg");
    const height = new THREE.TextureLoader().load("images/plutobump.jpg");
    const material = new THREE.MeshPhongMaterial( { map: textura,displacementMap: height } );
    pluto = new THREE.Mesh( geometry, material );

    scene.add(pluto,camera);
    pluto.position.y = 0;
    const amblight = new THREE.AmbientLight(0xffffff,0.75);
    scene.add(amblight);
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    function animate() {
        requestAnimationFrame( animate );
        pluto.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();