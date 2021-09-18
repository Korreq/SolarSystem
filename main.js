import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

//var scene,camera,renderer,ziemia,slonce,mars,controls,pawel2,mercury,venus,uranus,neptune,jupiter,saturn;
function init(){

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//const controls = new OrbitControls( camera, renderer.domElement );


function stars(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry,material);

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    scene.add(star);
}
Array(200).fill().forEach(stars);

const pawel = new THREE.BoxGeometry(4,4,4);
const paweltex = new THREE.TextureLoader().load("images/pawel.jpg");
const pawel_mate = new THREE.MeshBasicMaterial({ map: paweltex}); 
const pawel2 = new THREE.Mesh(pawel, pawel_mate);

const geometry_mercury = new THREE.SphereGeometry(1,32,32);
const textura_mercury = new THREE.TextureLoader().load("images/mercurymap.jpg");
const material_mercury = new THREE.MeshStandardMaterial( { map: textura_mercury } );
const mercury = new THREE.Mesh( geometry_mercury, material_mercury );

const geometry_venus = new THREE.SphereGeometry(2,32,32);
const textura_venus = new THREE.TextureLoader().load("images/venusmap.jpg");
const material_venus = new THREE.MeshStandardMaterial( { map: textura_venus } );
const venus = new THREE.Mesh( geometry_venus, material_venus );

const geometry_earth = new THREE.SphereGeometry(2,32,32);
const textura_earth = new THREE.TextureLoader().load("images/earthmap1k.jpg");
const material_earth = new THREE.MeshStandardMaterial( { map: textura_earth } );
const ziemia = new THREE.Mesh( geometry_earth, material_earth );

const geometry_mars = new THREE.SphereGeometry(1,32,32);
const textura_mars = new THREE.TextureLoader().load("images/mars_1k_color.jpg");
const material_mars = new THREE.MeshStandardMaterial( { map: textura_mars } );
const mars = new THREE.Mesh( geometry_mars, material_mars );

const geometry_jupiter = new THREE.SphereGeometry(5,32,32);
const textura_jupiter= new THREE.TextureLoader().load("images/jupitermap.jpg");
const material_jupiter = new THREE.MeshStandardMaterial( { map: textura_jupiter } );
const jupiter = new THREE.Mesh( geometry_jupiter, material_jupiter );

const geometry_saturn = new THREE.SphereGeometry(4,32,32);
const textura_saturn = new THREE.TextureLoader().load("images/saturnmap.jpg");
const material_saturn = new THREE.MeshStandardMaterial( { map: textura_saturn } );
const saturn = new THREE.Mesh( geometry_saturn, material_saturn );

const geometry_saturnring = new THREE.TorusGeometry( 5, 0.4, 20, 100 );
const textura_saturnring = new THREE.TextureLoader().load("images/saturnringcolor.jpg");
const material_saturnring = new THREE.MeshStandardMaterial( { map: textura_saturnring } );
const saturnring = new THREE.Mesh( geometry_saturnring, material_saturnring );

const geometry_uranus = new THREE.SphereGeometry(3,32,32);
const textura_uranus = new THREE.TextureLoader().load("images/uranusmap.jpg");
const material_uranus = new THREE.MeshStandardMaterial( { map: textura_uranus } );
const uranus = new THREE.Mesh( geometry_uranus, material_uranus );

const geometry_uranusring = new THREE.TorusGeometry( 4, 0.4, 20, 100 );
const textura_uranusring = new THREE.TextureLoader().load("images/uranusringcolour.jpg");
const material_uranusring = new THREE.MeshStandardMaterial( { map: textura_uranusring } );
const uranusring = new THREE.Mesh( geometry_uranusring, material_uranusring );

const geometry_neptune = new THREE.SphereGeometry(3,32,32);
const textura_neptune = new THREE.TextureLoader().load("images/neptunemap.jpg");
const material_neptune = new THREE.MeshStandardMaterial( { map: textura_neptune } );
const neptune = new THREE.Mesh( geometry_neptune, material_neptune );

const geometry_sun = new THREE.SphereGeometry(7,32,32);
const textura_sun = new THREE.TextureLoader().load("images/sunmap.jpg");
const material_sun = new THREE.MeshBasicMaterial( { map: textura_sun } );
const slonce = new THREE.Mesh( geometry_sun, material_sun );

const light = new THREE.PointLight( 0xffffff, 2, 100 );
light.position.set( 0, 0, 0 );

scene.add(venus,mercury,ziemia,mars,slonce,pawel2,neptune,uranus,uranusring,jupiter,saturn,saturnring,light);
mercury.position.x = 10;
venus.position.x = 20;
ziemia.position.x = 30;
mars.position.x = 40;
jupiter.position.x = 50;
saturn.position.x = 65;
saturnring.position.x = 65;
saturnring.rotation.x = 1.6;
uranus.position.x = 75;
uranusring.position.x = 75;
uranusring.rotation.x = 1.6;
neptune.position.x = 85;
camera.position.set(0,50,0);

var t=0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0;

const controls = new OrbitControls( camera, renderer.domElement );

// //controls.update() must be called after any manual changes to the camera's transform
// camera.position.set( 0, 20, 100 );
// controls.update();

// function animate() {

// 	requestAnimationFrame( animate );

// 	// required if controls.enableDamping or controls.autoRotate are set to true
// 	controls.update();

// 	renderer.render( scene, camera );

// }
// const help = new THREE.GridHelper(200,50);
// scene.add(help);

function animate() {
	requestAnimationFrame( animate );
    
    ziemia.rotation.y += 0.01;
    slonce.rotation.y += 0.01;
    mars.rotation.y += 0.01;
    venus.rotation.y += 0.01;
    mercury.rotation.y += 0.01;
    jupiter.rotation.y += 0.01;
    saturn.rotation.y += 0.01;
    uranus.rotation.y += 0.01;
    neptune.rotation.y += 0.01;
    saturnring.rotation.z += 0.01;
    uranusring.rotation.z += 0.01;
    renderer.render( scene, camera );
}
function rotate(){
    requestAnimationFrame( rotate );
    t  += 0.01;
    t1 += 0.011;
    t2 += 0.015;
    t3 += 0.014;
    t4 += 0.016;
    t5 += 0.017;
    t6 += 0.018;
    t7 += 0.019;

    mercury.position.x = 10*Math.cos(t5);
    mercury.position.z = 10*Math.sin(t5);

    venus.position.x = 20*Math.cos(t2);
    venus.position.z = 20*Math.sin(t2);

    ziemia.position.x = 30*Math.cos(t7);
    ziemia.position.z = 30*Math.sin(t7);

    mars.position.x = 40*Math.cos(t6);
    mars.position.z = 40*Math.sin(t6);

    jupiter.position.x = 50*Math.cos(t1);
    jupiter.position.z = 50*Math.sin(t1);

    saturn.position.x = 60*Math.cos(t4);
    saturn.position.z = 60*Math.sin(t4);
    saturnring.position.x = saturn.position.x;
    saturnring.position.z = saturn.position.z;

    uranus.position.x = 70*Math.cos(t3);
    uranus.position.z = 70*Math.sin(t3);
    uranusring.position.x = uranus.position.x;
    uranusring.position.z = uranus.position.z;

    neptune.position.x = 80*Math.cos(t);
    neptune.position.z = 80*Math.sin(t);
    
    renderer.render( scene, camera );
}

animate();
rotate();
}
init();


