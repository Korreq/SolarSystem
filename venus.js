import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let venus,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(9,32,32);
    const textura = new THREE.TextureLoader().load("images/venusmap.jpg");
    const height = new THREE.TextureLoader().load("images/venusbump.jpg");
    const material = new THREE.MeshBasicMaterial( { map: textura, displacementMap: height } );
    venus = new THREE.Mesh( geometry, material );
    
    scene.add(venus,camera);
    venus.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    function animate() {
        requestAnimationFrame( animate );
        venus.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();