import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let mercury,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(5.5,32,32);
    const textura = new THREE.TextureLoader().load("images/mercurymap.jpg");
    const material = new THREE.MeshBasicMaterial( { map: textura } );
    mercury = new THREE.Mesh( geometry, material );

    scene.add(mercury,camera);
    mercury.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    function animate() {
        requestAnimationFrame( animate );
        mercury.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();