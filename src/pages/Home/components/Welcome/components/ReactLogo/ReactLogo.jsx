import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/react_logo.glb");
  const reactLogo = useRef();

  useFrame((state, delta) => {
    reactLogo.current.rotation.z += delta * 0.5;
  }, []);

  return (
    <group {...props} dispose={null} ref={ reactLogo }>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        >
            <meshStandardMaterial color={ "#61DAFB" } />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/react_logo.glb");