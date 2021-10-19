import './style-sun.css';
import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
function init(){
            let t = 1;
            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const earthgeometry = new THREE.SphereGeometry(2,64,64);
			const earthmaterial = new THREE.MeshPhongMaterial({
                map : new THREE.TextureLoader().load('images/earthmap.jpg'),
                bumpMap : new THREE.TextureLoader().load('images/earthbump.jpg'),
                bumpScale : 0.1,
            });
			const earth = new THREE.Mesh( earthgeometry, earthmaterial );
			scene.add( earth );

            const cloudgeometry = new THREE.SphereGeometry(2.05,64,64);
            const cloudmaterial = new THREE.MeshPhongMaterial({
                map : new THREE.TextureLoader().load('images/earthcloud.png'),
                transparent : true,
            });
            const cloud = new THREE.Mesh( cloudgeometry, cloudmaterial);
            scene.add(cloud);

            const stargeometry = new THREE.SphereGeometry(80,64,64);
            const starmaterial = new THREE.MeshBasicMaterial({
                map : new THREE.TextureLoader().load('images/stars.png'),
                side : THREE.BackSide,
            });
            const stars = new THREE.Mesh( stargeometry, starmaterial);
            scene.add(stars);

            const geometry_moon = new THREE.SphereGeometry(0.5,64,64);
            const material_moon = new THREE.MeshPhongMaterial({
                map : new THREE.TextureLoader().load('images/moon.jpg'),
                bumpMap : new THREE.TextureLoader().load('images/moonbump.jpg'),
                bumpScale : 0.01,
            });
            const moon = new THREE.Mesh( geometry_moon, material_moon );
            scene.add(moon);
            moon.position.set(3,3,0);
            //moon.position.set(earth.position.x-3,earth.position.y-2,earth.position.z-2)

            const ambientLight = new THREE.AmbientLight(0xffffff,0.2);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff,1);
            pointLight.position.set(5,3,5);
            scene.add(pointLight);

            camera.position.z = 6;
			//camera.position.set(5,3,4);
            
			function animate() {
				requestAnimationFrame( animate );
                t  += 0.01;
                moon.position.z = 3*Math.cos(t);
                moon.position.x = 3*Math.sin(t);
                moon.position.y = 3*Math.sin(t);
				earth.rotation.y -= 0.0015;
                cloud.rotation.y -= 0.0015;
                stars.rotation.y -= 0.002;
                moon.rotation.y -= 0.003;
				renderer.render( scene, camera );
			};
            const controls = new OrbitControls(camera, renderer.domElement);
			animate();

    }
    init();