import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let planeta,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(5.5,32,32);
    const textura = new THREE.TextureLoader().load("images/saturnmap.jpg");
    const material = new THREE.MeshBasicMaterial( { map: textura } );
    planeta = new THREE.Mesh( geometry, material );

    const geometry_saturnring = new THREE.TorusGeometry( 10, 2, 2, 100 );
    const textura_saturnring = new THREE.TextureLoader().load("images/saturnringcolor.jpg");
    const material_saturnring = new THREE.MeshBasicMaterial( { map: textura_saturnring } );
    const saturnring = new THREE.Mesh( geometry_saturnring, material_saturnring );

    scene.add(planeta,camera,saturnring);
    planeta.position.y = 0;
    saturnring.position.y = 0;
    saturnring.rotation.x = 1.6;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    function animate() {
        requestAnimationFrame( animate );
        planeta.rotation.y += 0.01;
        saturnring.rotation.z += 0.01;
        renderer.render( scene, camera );
    }
    animate();

   // controls = new OrbitControls(camera, renderer.domElement);

    }
    init();