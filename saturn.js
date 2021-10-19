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



    const geometry = new THREE.SphereGeometry(9,32,32);
    const textura = new THREE.TextureLoader().load("images/saturnmap.jpg");
    const material = new THREE.MeshPhongMaterial( { map: textura} );
    planeta = new THREE.Mesh( geometry, material );

    const geometry_saturnring = new THREE.TorusGeometry( 12, 2, 2, 100 );
    const textura_saturnring = new THREE.TextureLoader().load("images/saturnringcolor.jpg");
    const material_saturnring = new THREE.MeshBasicMaterial( { map: textura_saturnring,transparent: true,opacity: 0.7 } );
    const saturnring = new THREE.Mesh( geometry_saturnring, material_saturnring );

    scene.add(planeta,camera,saturnring);
    planeta.position.y = 0;
    saturnring.position.y = 0;
    saturnring.rotation.x = 1.6;
    camera.position.set(0,2,18);
    camera.lookAt(planeta.position);

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
            pointLight.position.set(5,6,15);
            scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        planeta.rotation.y -= 0.002;
        saturnring.rotation.z += 0.002;
        stars.rotation.y -= 0.002;
        renderer.render( scene, camera );
    }
    animate();

    //controls = new OrbitControls(camera, renderer.domElement);

    }
    init();