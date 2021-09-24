import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let uranus,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(8,32,32);
    const textura = new THREE.TextureLoader().load("images/uranusmap.jpg");
    const material = new THREE.MeshStandardMaterial( { map: textura} );
    uranus = new THREE.Mesh( geometry, material );

    const geometry_uranusring = new THREE.TorusGeometry( 11, 1.5, 2, 100 );
    const textura_uranusring = new THREE.TextureLoader().load("images/uranusringcolour.jpg");
    const material_uranusring = new THREE.MeshPhongMaterial( { map: textura_uranusring,transparent: true,opacity: 0.7} );
    const uranusring = new THREE.Mesh(
        geometry_uranusring,
        material_uranusring,
    );

    const amblight = new THREE.AmbientLight(0xffffff,0.75);
    scene.add(amblight);
    scene.add(uranus,camera,uranusring);
    uranus.position.y = 0;
    uranusring.position.y = 0;
    uranusring.rotation.x = 1.6;
    //camera.position.set(17,0,0);
    camera.position.set(0,3,18);
    camera.lookAt(uranus.position);

    function animate() {
        requestAnimationFrame( animate );
        uranus.rotation.y += 0.001;
        uranusring.rotation.z += 0.001;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();