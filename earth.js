import './style-sun.css';
import * as THREE from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let earth,scene,camera,renderer,controls,moon;
    var t = 0;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.SphereGeometry(5.5,32,32);
    const textura = new THREE.TextureLoader().load("images/earthmap.jpg");
    const normaltextura = new THREE.TextureLoader().load("images/earthbump.jpg");
    const material = new THREE.MeshBasicMaterial( { map: textura, normalMap: normaltextura } );
    earth = new THREE.Mesh( geometry, material );

    const geometry_moon = new THREE.SphereGeometry(2,32,32);
    const textura_moon = new THREE.TextureLoader().load("images/moon.jpg");
    const material_moon = new THREE.MeshBasicMaterial( { map: textura_moon } );
    moon = new THREE.Mesh( geometry_moon, material_moon );

    scene.add(earth,camera,moon);
    earth.position.y = 0;
    moon.position.y = 8;
    
    //moon.position.x = 10;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,17);

    function animate() {
        requestAnimationFrame( animate );
        earth.rotation.y += 0.01;
        moon.rotation.y += 0.01;

        
        renderer.render( scene, camera );
    }

    function rotate(){
        requestAnimationFrame( rotate );
        t  += 0.01;
        moon.position.x = 10*Math.cos(t);
        moon.position.y = 10*Math.sin(t);
        renderer.render( scene, camera );
    }
    animate();
    rotate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();