import './Home.module.scss'
import { Canvas } from '@react-three/fiber'
import Welcome from './components/Welcome/Welcome.jsx'

export default function Home() {
    return (
        <Canvas
            perspective="true"
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ -7, 0, 9 ]
            } }
        >
           <Welcome />
        </Canvas>
    )
}