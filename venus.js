import './style-sun.css';
import * as THREE from 'three';
import { StaticReadUsage } from 'three';
//import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let venus,scene,camera,renderer,controls,venus2;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(2,64,64); 
    const textura = new THREE.TextureLoader().load("images/venusmap.jpg");
    const material = new THREE.MeshPhongMaterial( {
        map: textura,
        bumpMap: new THREE.TextureLoader().load("images/venusbump.jpg"),
        bumpScale : 0.02
    } );
    venus = new THREE.Mesh( geometry, material );
    
    scene.add(camera,venus2,venus);
    venus.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,5);

    const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
    scene.add(ambientLight);

    const stargeometry = new THREE.SphereGeometry(80,64,64);
            const starmaterial = new THREE.MeshBasicMaterial({
                map : new THREE.TextureLoader().load('images/stars.png'),
                side : THREE.BackSide,
            });
            const stars = new THREE.Mesh( stargeometry, starmaterial);
            scene.add(stars);
            
    const pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5,3,5);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        venus.rotation.y -= 0.005;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();