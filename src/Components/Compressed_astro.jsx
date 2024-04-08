/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/compressed_astro.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Astro(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/compressed_astro.glb')
  const { actions, names } = useAnimations(animations, group)
  console.log(names);

  useEffect(() => {
    actions[names[3]].reset().fadeIn(0.5).play();
  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model001" position={[-0.073, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.315}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode0_0001" scale={0.01}>
                <group name="skeletal3_6001">
                  <group name="GLTF_created_0001">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="_3_correction001" />
                    <group name="_4_correction001" />
                    <group name="_5_correction001" />
                    <group name="Object_100001">
                      <skinnedMesh name="Object_1001" geometry={nodes.Object_1001.geometry} material={materials['Material.014']} skeleton={nodes.Object_1001.skeleton} />
                      <skinnedMesh name="Object_1001_1" geometry={nodes.Object_1001_1.geometry} material={materials['Material.015']} skeleton={nodes.Object_1001_1.skeleton} />
                      <skinnedMesh name="Object_1001_2" geometry={nodes.Object_1001_2.geometry} material={materials['Material.011']} skeleton={nodes.Object_1001_2.skeleton} />
                      <skinnedMesh name="Object_1001_3" geometry={nodes.Object_1001_3.geometry} material={materials['Material.010']} skeleton={nodes.Object_1001_3.skeleton} />
                    </group>
                    <skinnedMesh name="Object_103001" geometry={nodes.Object_103001.geometry} material={materials['material_1.002']} skeleton={nodes.Object_103001.skeleton} />
                    <group name="Object_106001">
                      <skinnedMesh name="Object_3001" geometry={nodes.Object_3001.geometry} material={materials.Material} skeleton={nodes.Object_3001.skeleton} />
                      <skinnedMesh name="Object_3001_1" geometry={nodes.Object_3001_1.geometry} material={materials['Material.001']} skeleton={nodes.Object_3001_1.skeleton} />
                      <skinnedMesh name="Object_3001_2" geometry={nodes.Object_3001_2.geometry} material={materials['Material.002']} skeleton={nodes.Object_3001_2.skeleton} />
                      <skinnedMesh name="Object_3001_3" geometry={nodes.Object_3001_3.geometry} material={materials['Material.003']} skeleton={nodes.Object_3001_3.skeleton} />
                      <skinnedMesh name="Object_3001_4" geometry={nodes.Object_3001_4.geometry} material={materials['Material.004']} skeleton={nodes.Object_3001_4.skeleton} />
                      <skinnedMesh name="Object_3001_5" geometry={nodes.Object_3001_5.geometry} material={materials['Material.005']} skeleton={nodes.Object_3001_5.skeleton} />
                      <skinnedMesh name="Object_3001_6" geometry={nodes.Object_3001_6.geometry} material={materials['Material.006']} skeleton={nodes.Object_3001_6.skeleton} />
                    </group>
                    <group name="Object_99001">
                      <skinnedMesh name="Object_0001" geometry={nodes.Object_0001.geometry} material={materials['Material.007']} skeleton={nodes.Object_0001.skeleton} />
                      <skinnedMesh name="Object_0001_1" geometry={nodes.Object_0001_1.geometry} material={materials['Material.008']} skeleton={nodes.Object_0001_1.skeleton} />
                      <skinnedMesh name="Object_0001_2" geometry={nodes.Object_0001_2.geometry} material={materials['Material.009']} skeleton={nodes.Object_0001_2.skeleton} />
                      <skinnedMesh name="Object_0001_3" geometry={nodes.Object_0001_3.geometry} material={materials['Material.010']} skeleton={nodes.Object_0001_3.skeleton} />
                      <skinnedMesh name="Object_0001_4" geometry={nodes.Object_0001_4.geometry} material={materials['Material.011']} skeleton={nodes.Object_0001_4.skeleton} />
                      <skinnedMesh name="Object_0001_5" geometry={nodes.Object_0001_5.geometry} material={materials['Material.012']} skeleton={nodes.Object_0001_5.skeleton} />
                      <skinnedMesh name="Object_0001_6" geometry={nodes.Object_0001_6.geometry} material={materials['Material.013']} skeleton={nodes.Object_0001_6.skeleton} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Astro; 
useGLTF.preload('./models/compressed_astro.glb')
