import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
var rotatee = Boolean(true);
function init(){
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function stars(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry,material);

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));
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
const textura_earth = new THREE.TextureLoader().load("images/earthmap.jpg");
const material_earth = new THREE.MeshStandardMaterial( { map: textura_earth } );
const earth = new THREE.Mesh( geometry_earth, material_earth );

const geometry_mars = new THREE.SphereGeometry(1,32,32);
const textura_mars = new THREE.TextureLoader().load("images/marsmap.jpg");
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

const geometry_saturnring = new THREE.TorusGeometry( 5, 2, 2, 100 );
const textura_saturnring = new THREE.TextureLoader().load("images/saturnringcolor.jpg");
const material_saturnring = new THREE.MeshStandardMaterial( { map: textura_saturnring } );
const saturnring = new THREE.Mesh( geometry_saturnring, material_saturnring );

const geometry_uranus = new THREE.SphereGeometry(3,32,32);
const textura_uranus = new THREE.TextureLoader().load("images/uranusmap.jpg");
const material_uranus = new THREE.MeshStandardMaterial( { map: textura_uranus } );
const uranus = new THREE.Mesh( geometry_uranus, material_uranus );

const geometry_uranusring = new THREE.TorusGeometry( 4, 1.5, 2, 100 );
const textura_uranusring = new THREE.TextureLoader().load("images/uranusringcolour.jpg");
const material_uranusring = new THREE.MeshStandardMaterial( { map: textura_uranusring } );
const uranusring = new THREE.Mesh( geometry_uranusring, material_uranusring );

const geometry_neptune = new THREE.SphereGeometry(3,32,32);
const textura_neptune = new THREE.TextureLoader().load("images/neptunemap.jpg");
const material_neptune = new THREE.MeshStandardMaterial( { map: textura_neptune } );
const neptune = new THREE.Mesh( geometry_neptune, material_neptune );

const geometry_pluto = new THREE.SphereGeometry(2,32,32);
const textura_pluto = new THREE.TextureLoader().load("images/plutomap.jpg");
const material_pluto = new THREE.MeshStandardMaterial( { map: textura_pluto } );
const pluto = new THREE.Mesh( geometry_pluto, material_pluto );

const geometry_sun = new THREE.SphereGeometry(7,32,32);
const textura_sun = new THREE.TextureLoader().load("images/sunmap.jpg");
const normaltex_sun = new THREE.TextureLoader().load("images/sunbump.jpg")
const material_sun = new THREE.MeshBasicMaterial( { map: textura_sun, normalMap: normaltex_sun } );
const sun = new THREE.Mesh( geometry_sun, material_sun );

sun.userData.parent = "sun";
earth.userData.parent = "earth";
mercury.userData.parent = "mercury";
venus.userData.parent = "venus";
mars.userData.parent = "mars";
jupiter.userData.parent = "jupiter";
saturn.userData.parent = "saturn";
uranus.userData.parent = "uranus";
neptune.userData.parent = "neptune";
pluto.userData.parent = "pluton";

//swiatło dyrekcyjne
const light = new THREE.PointLight( 0xffffff, 2, 100 );
//ambient light z poprawnymi ustawieniami żeby planety nie były żarówiaste
//const amblight = new THREE.AmbientLight(0xffffff,0.75);


scene.add(venus,mercury,earth,mars,sun,pawel2,neptune,uranus,uranusring,jupiter,saturn,saturnring,pluto);

light.position.set( 0, 0, 0 );
//scene.add(amblight);
//scene.remove(light);
scene.add(light);

mercury.position.x = 10;
venus.position.x = 20;
earth.position.x = 30;
mars.position.x = 40;
jupiter.position.x = 50;
saturn.position.x = 65;
saturnring.position.x = saturn.position.x;
saturnring.rotation.x = 1.6;
uranus.position.x = 80;
uranusring.position.x = uranus.position.x;
uranusring.rotation.x = 1.6;
neptune.position.x = 90;
pluto.position.x = 100;

camera.position.set(0,50,0);

var t=0,t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0;

const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
    
    earth.rotation.y += 0.01;
    sun.rotation.y += 0.01;
    mars.rotation.y += 0.01;
    venus.rotation.y += 0.01;
    mercury.rotation.y += 0.01;
    jupiter.rotation.y += 0.01;
    saturn.rotation.y += 0.01;
    uranus.rotation.y += 0.01;
    neptune.rotation.y += 0.01;
    saturnring.rotation.z += 0.01;
    uranusring.rotation.z += 0.01;
    pluto.rotation.z += 0.01;
    renderer.render( scene, camera );

}
function rotate(){
    requestAnimationFrame( rotate );
    if(rotatee == true){
    t  += 0.001, t1 += 0.0011, t2 += 0.0015, t3 += 0.0014, t4 += 0.0016, t5 += 0.0017, t6 += 0.0018, t7 += 0.0019;

    mercury.position.x = 10*Math.cos(t5);
    mercury.position.z = 10*Math.sin(t5);

    venus.position.x = 20*Math.cos(t2);
    venus.position.z = 20*Math.sin(t2);

    earth.position.x = 30*Math.cos(t7);
    earth.position.z = 30*Math.sin(t7);

    mars.position.x = 40*Math.cos(t6);
    mars.position.z = 40*Math.sin(t6);

    jupiter.position.x = 50*Math.cos(t1);
    jupiter.position.z = 50*Math.sin(t1);

    saturn.position.x = 65*Math.cos(t4);
    saturn.position.z = 65*Math.sin(t4);
    saturnring.position.x = saturn.position.x;
    saturnring.position.z = saturn.position.z;

    uranus.position.x = 80*Math.cos(t3);
    uranus.position.z = 80*Math.sin(t3);
    uranusring.position.x = uranus.position.x;
    uranusring.position.z = uranus.position.z;

    neptune.position.x = 90*Math.cos(t);
    neptune.position.z = 90*Math.sin(t);

    pluto.position.x = 100*Math.cos(t);
    pluto.position.z = 100*Math.sin(t);
    }
    renderer.render( scene, camera );
}
function PickPlanet() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    for (let i = 0; i < intersects.length; i++) {
        switch(intersects[0].object.userData.parent){
            case "mercury":           
                location.href = "mercury.html";
                break;
            case "venus":
                location.href = "venus.html";
                break;
            case "earth":
                location.href = "earth.html";
                break;
            case "mars":
                location.href = "mars.html";
                break;
            case "jupiter":
                location.href = "jupiter.html";
                break;
            case "saturn":
                location.href = "saturn.html";
                break;
            case "uranus":
                location.href = "uranus.html";
                break;
            case "neptune":
                location.href = "neptune.html";
                break;
            case "sun":
                location.href = "sun.html";
                break;
            case "pluton":
                location.href = "pluto.html";
                break;
        }
    }
  }
window.addEventListener('click', PickPlanet);
window.addEventListener('mousemove', onMouseMove, false); 

animate();
rotate();
}
init();


