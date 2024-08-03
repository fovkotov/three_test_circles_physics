import * as THREE from 'three'
// import { DragControls } from 'three/addons/controls/DragControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'
import CANNON, { Sphere } from 'cannon'

// Canvas
const canvas = document.querySelector('canvas.webgl')

//
const cursor = {
  x:0,
  y:0
}

//Cursor
window.addEventListener('mousemove' , (event) => {
  cursor.x = - (event.clientX / sizes.width -0.5)
  cursor.y = event.clientY / sizes.height -0.5
})

// sizes 
const sizes = {
  width: 800,
  height: 600
};



//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xA5A9A5 );



//camera
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.x = 2;
camera.position.y = 10;
// camera.position.z = 10;




//render
const renderer = new THREE.WebGLRenderer(
  {canvas: canvas}
);
renderer.setSize( window.innerWidth, window.innerHeight );



//controls
const controls = new OrbitControls(camera, canvas)
// controls.target.y = 2
controls.enableDamping = true



//material and geo
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
const material1 = new THREE.MeshBasicMaterial( { color: 0xA5A9A5 } );



//world
const world = new CANNON.World()
world.gravity.set(0, -9.82, 0)


//material — ЧТО ЭТО??
const concentreMaterial = new CANNON.Material('concrete')
const plasticeMaterial = new CANNON.Material('plastic')
const concretePlasticContactMaterial = new CANNON.ContactMaterial(
  concentreMaterial,
  plasticeMaterial,
  {

  }
)

//sphere1
const sphereMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphereMesh);
// sphere phisics
const sphereShape = new CANNON.Sphere(0.5)
const sphereBody = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(0,3,0),
});
sphereBody.addShape(new CANNON.Sphere(0.5));
world.addBody(sphereBody);



//const CylinderGeometry 
const CylinderGeometry = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.5, 0.5, 5, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
CylinderGeometry.quaternion.setFromAxisAngle(
  new THREE.Vector3(-1,-1,0),
  Math.PI * 1.5
)
scene.add(CylinderGeometry);
//Cylinder phisics
const CylinderShape = new CANNON.Sphere(0.5)
const CylinderBody = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(3,1,3),
});
CylinderBody.addShape(new CANNON.Sphere(0.5));
CylinderBody.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1,0,0),
  Math.PI * 3
)
world.addBody(CylinderBody);



//const CylinderGeometry 2
const CylinderGeometry2 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.5, 0.5, 5, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
CylinderGeometry2.quaternion.setFromAxisAngle(
  new THREE.Vector3(-1,0,0),
  Math.PI * 1.5
)
scene.add(CylinderGeometry2);
//Cylinder phisics
const CylinderShape2 = new CANNON.Sphere(0.5)
const CylinderBody2 = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(5,2,0),
});
CylinderBody2.addShape(new CANNON.Sphere(0.5));
CylinderBody2.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1,0,0),
  Math.PI * 3
)
world.addBody(CylinderBody2);



//sphere2
const sphere2Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphere2Mesh);
// sphere phisics
const sphere2Shape = new CANNON.Sphere(0.5)
const sphere2Body = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(1,0,0),
});
sphere2Body.addShape(new CANNON.Sphere(0.5));
world.addBody(sphere2Body);


//sphere3
const sphere3Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphere3Mesh);
// sphere phisics
const sphere3Shape = new CANNON.Sphere(0.5)
const sphere3Body = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(3,0,0),
});
sphere3Body.addShape(new CANNON.Sphere(1.5));
world.addBody(sphere3Body);



//sphere4
const sphere4Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphere4Mesh);
// sphere phisics
const sphere4Shape = new CANNON.Sphere(0.5)
const sphere4Body = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(6,6,1),
});
sphere4Body.addShape(new CANNON.Sphere(0.5));
world.addBody(sphere4Body);



//sphere5
const sphere5Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphere5Mesh);
// sphere phisics
const sphere5Shape = new CANNON.Sphere(0.5)
const sphere5Body = new CANNON.Body({ 
  mass: 1, 
  position: new CANNON.Vec3(2,2,2),
});
sphere5Body.addShape(new CANNON.Sphere(0.5));
world.addBody(sphere5Body);


//sphere6
const sphere6Mesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshBasicMaterial({ 
    // metallness: 0.3,
    // roughness: 0.3,
    color: 0xFFFFFF
  })
);
scene.add(sphere6Mesh);
// sphere phisics
const sphere6Shape = new CANNON.Sphere(0.5)
const sphere6Body = new CANNON.Body({ 
  mass: 10, 
  position: new CANNON.Vec3(0,30,2),
});
sphere6Body.addShape(new CANNON.Sphere(0.5));
world.addBody(sphere6Body);


//что




//plane
const planeShape = new CANNON.Plane(0.5)
const planeBody = new CANNON.Body()
planeBody.mass = 0
planeBody.addShape(planeShape)
planeBody.quaternion.setFromAxisAngle(
  new CANNON.Vec3(-1,0,0),
  Math.PI * 0.500
)
world.addBody(planeBody);





//mesh 1
const cube = new THREE.Mesh( geometry, material1 );
cube.rotation.x = 0.011
cube.scale.set(50,0.1,50)
scene.add( cube );
// cube.castShadow = true;
// cube.receiveShadow = true;

// cube.scale.set(.1,1,.2)



//clock
const clock = new THREE.Clock()
let oldElapsedTime = 0


//animationn
const tick = () => {
  // cube.position.x += 0.01
  // cube.rotation.y += 0.01


  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime

  // Обновляем физический мир
  world.step(1 / 60, deltaTime, 3); 

  // Обновляем позиции THREE.Mesh на основе тел Cannon
  sphereMesh.position.copy(sphereBody.position);
  sphere2Mesh.position.copy(sphere2Body.position);
  CylinderGeometry.position.copy(sphere2Body.position);
  CylinderGeometry2.position.copy(sphere2Body.position);
  sphere3Mesh.position.copy(sphere3Body.position);
  sphere4Mesh.position.copy(sphere4Body.position);
  sphere5Mesh.position.copy(sphere5Body.position);
  sphere6Mesh.position.copy(sphere6Body.position);


  controls.update()

  renderer.render(scene, camera)
  

  // camera.position.x = Math.cos(cursor.x * Math.PI * 4) * 3
  // camera.position.z = Math.sin (cursor.x * Math.PI * 4) * 3
  // camera.position.y = cursor.y * 5
  camera.lookAt(cube.position)

    window.requestAnimationFrame(tick)
}
tick()
