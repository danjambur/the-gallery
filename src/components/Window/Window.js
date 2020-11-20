import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
// import { draco } from 'drei';
import * as THREE from 'three';
import { MeshPhongMaterial } from 'three';

const Window = ({ position }) => {
    const [model, setModel] = useState();

    useEffect(() => {
      new GLTFLoader().load("/assets/3D/Window/scene.gltf", setModel)
    }, []);
  
    return (
        
        model ? <primitive 
                    scale={[0.008, 0.008, 0.008]}
                    position={position}
                    rotation={[0 ,Math.PI, 0]}
                    object={model.scene}
                    shadows={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {                                     
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.metalness = 0;
                        }
                    })} 
                /> : null
    )
  }

  export default Window;

// import React, { useMemo } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';
// import { draco } from 'drei';


// const Window = (props) => {
//     let window, texture, specularMap

//     const { nodes } = useLoader(GLTFLoader, "/assets/3D/Window2/scene.gltf", draco())
//     window = nodes.Scene.children[2]

//     console.log(window)

//     texture = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Window/textures/Material.001_diffuse.png"), []);
//     texture.flipY=false;

//     // portraitNormalMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_normal.png"), []);
//     // portraitNormalMap.flipY=false;

//     // portraitSpecularMap = useMemo(() => new THREE.TextureLoader().load("/assets/3D/Portrait/textures/initialShadingGroup_metallicRoughness.png"), []);
//     // portraitSpecularMap.flipY=false;

    
//     return (  
   
//             <mesh 
//                 scale={[0.5, 0.5, 0.5]} 
//                 geometry={window.geometry}
//                 // position={[19.4, 5.5, 0]}
//                 // rotation={[0, -Math.PI / 1, 0]}
//                 castShadow
//                 receiveShadow
//             >
//                 <meshPhongMaterial attach="material" shininess={200}>
//                     <primitive attach="map" object={texture} />
//                     {/* <primitive attach="normalMap" object={portraitNormalMap} />
//                     <primitive attach="specularMap" object={portraitSpecularMap} /> */}
//                 </meshPhongMaterial>
//             </mesh>             

//     );
// }

// export default Window;