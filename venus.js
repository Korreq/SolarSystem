import './style-sun.css';
import * as THREE from 'three';
import { StaticReadUsage } from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';


    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();
    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        }

    let venus,scene,camera,renderer,controls;
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
    
    const atmospheregeometry = new THREE.SphereGeometry(2.1,64,64);
            const atmospherematerial = new THREE.MeshPhongMaterial({
                map : new THREE.TextureLoader().load('images/venusatmosphere.jpg'),
                opacity: 1,
                transparent : true
            });
            const atmosphere = new THREE.Mesh( atmospheregeometry, atmospherematerial);
            scene.add(atmosphere);

            
    scene.add(camera,venus);
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
    
    
    atmosphere.userData.parent = "atmosphere";

    export function opacity(){
        if(atmosphere.material.opacity == 0.3){
            atmosphere.material.opacity = 1;}
            else
            { atmosphere.material.opacity = 0.3;}
            renderer.render( atmosphere,camera);
        }

    function PickPlanet() {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        for (let i = 0; i < intersects.length; i++) {
            switch(intersects[0].object.userData.parent){
                case "atmosphere":
                    if(atmosphere.material.opacity == 0.3){
                    atmosphere.material.opacity = 1;}
                    else
                    { atmosphere.material.opacity = 0.3;}
                    break;
            }
        }
      }
      window.addEventListener('click', PickPlanet);
      window.addEventListener('mousemove', onMouseMove); 
    const pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5,3,5);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame( animate );
        venus.rotation.y -= 0.005;
        stars.rotation.y -= 0.002;
        atmosphere.rotation.y -= 0.005;
        renderer.render( scene, camera );
    }
    animate();

    controls = new OrbitControls(camera, renderer.domElement);

