import './style-sun.css';
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){


    let mars,scene,camera,renderer,controls;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );



    const geometry = new THREE.SphereGeometry(2,64,64);
    const textura = new THREE.TextureLoader().load("images/marsmap.jpg");
    const material = new THREE.MeshPhongMaterial( {
        map: textura,
        bumpMap: new THREE.TextureLoader().load("images/mars_1k_topo.jpg"),
        bumpScale : 0.09
    } );
    mars = new THREE.Mesh( geometry, material );

    scene.add(mars,mars);
    mars.position.y = 0;
    //camera.position.set(17,0,0);
    camera.position.set(0,0,4);

    const stargeometry = new THREE.SphereGeometry(80,64,64);
            const starmaterial = new THREE.MeshBasicMaterial({
                map : new THREE.TextureLoader().load('images/stars.png'),
                side : THREE.BackSide,
            });
            const stars = new THREE.Mesh( stargeometry, starmaterial);
            scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5,3,5);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        mars.rotation.y -= 0.005;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    controls = new OrbitControls(camera, renderer.domElement);

    }
    init();