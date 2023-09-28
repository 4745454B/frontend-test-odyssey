import Lights from "./components/Lights/Lights.jsx";
import { PresentationControls, Center, Text3D, Float } from "@react-three/drei";
import ReactLogo from "./components/ReactLogo/ReactLogo.jsx";

export default function Welcome(){
    return (
        <>
            <color args={ ['#fff'] } attach='background' />
            <Lights />
            <PresentationControls 
                global
                polar={[-0.6, 0.6]}
                azimuth={[-1, 1]}
                config={{ mass: 2, tension: 300 }}
                snap={{ mass: 6, tension: 300 }}
            >
                <Float
                    floatIntensity={ 1 }
                    speed={ 2 }
                    rotationIntensity={ 0 }
                >
                    <Center
                        position={[0, 0, 0]}
                        rotation={[0, - Math.PI * 0.2, 0]}
                    >
                        <Text3D 
                            font="./fonts/helvetiker_regular.typeface.json"
                            letterSpacing={0.075}
                            size={0.75}
                            height={0.2}
                            curveSegments={12}
                            bevelEnabled
                            bevelThickness={0.02}
                            bevelSize={0.03}
                            bevelOffset={0}
                            bevelSegments={5}
                        >
                            Welc
                            <meshStandardMaterial color={ "#61DAFB" } />
                        </Text3D>
                
                        <ReactLogo 
                            scale={ [ 0.25, 0.25, 0.25 ] }
                            position={ [ 3.28, 0.3, 0 ] }
                        />
                    
                        <Text3D 
                            font="./fonts/helvetiker_regular.typeface.json"
                            letterSpacing={0.075}
                            size={0.75}
                            height={0.2}
                            curveSegments={12}
                            bevelEnabled
                            bevelThickness={0.02}
                            bevelSize={0.03}
                            bevelOffset={0}
                            bevelSegments={5}
                            position={ [ 4, 0, 0 ] }
                        >
                            me
                            <meshStandardMaterial color={ "#61DAFB" } />
                        </Text3D>
                    </Center>
                </Float>
            </PresentationControls>
        </>
    )
}