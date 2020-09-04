import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./css/Logo1.css";




function Loading() {
                              // mesh.scale.set(0.5,0.5,0.5);
  return (

    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>   
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
  }



  function BigW() {
    console.log("Logo1 Function BigW running");
    const group = useRef();
    const { scene } = useLoader(GLTFLoader, "/models/BigWScale1.5.glb");
  
  // for console-logging of the contents of the model - delete when no longer required
    const { nodes } = useLoader(GLTFLoader, "/models/BigWScale1.5.glb");
   
    console.log("Logo1 nodes = |" , {nodes} , "|");
    // console.log("Logo1 nodes #items = |" , {nodes[3]} , "|");

    console.log("Logo1 scene contains [",scene, "|");
    console.log("Logo1 group contains [",group, "|");

    useFrame(() => {
      group.current.rotation.x += 0.016;  // axis & speed
  });

  return (
    <group ref={group}>
     <primitive object={scene} dispose={null} />
    </group>
  );
  }




export default function Logo1() {
  return (
      <div id="divCanvas1">
        <Canvas id = "Canvas1" className = "Canvas1" orthographic camera={{ zoom: 50, position: [0, 0, 100] }} >
          <ambientLight /> 
          <pointLight position={[10, 10, 10]} />
          <directionalLight intensity={4.16} />
          <Suspense fallback={<Loading />}>
          <BigW>
           {/*<planeBufferGeometry attach="geometry" args={[viewport.width, viewport.height]} />*/}
          </BigW>
          </Suspense>
        </Canvas>
      </div>  
  );
}
