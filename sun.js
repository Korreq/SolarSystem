import './style-ziemia.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let planeta,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/1.48, window.innerHeight/1.48 );
    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(6,32,32);
    const textura = new THREE.TextureLoader().load("images/sunmap.jpg");
    const material = new THREE.MeshBasicMaterial( { map: textura } );
    planeta = new THREE.Mesh( geometry, material );

    scene.add(planeta,camera);
    planeta.position.y = 0;
    //camera.position.set(10,0,0);
    camera.position.set(0,0,10);

    function animate() {
        requestAnimationFrame( animate );
        planeta.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();