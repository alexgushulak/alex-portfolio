import { useState, useRef } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.cjs.js'
import { TypedArray } from 'maath/dist/declarations/src/ctypes'

export default function Stars(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Points>(null!)
    const [sphere] = useState(() => random.inSphere(new Float32Array(10000), { radius: 1.0 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points {...props} ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }