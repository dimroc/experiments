import * as THREE from 'three'

const WIDTH = 160
const HEIGHT = 125

export function useSpinningCube() {
  let animationId: number | null = null
  let renderer: THREE.WebGLRenderer | null = null

  function start(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 1, 1000)
    camera.position.set(0, 4, 8)
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    const scale = 2.5
    const geometry = new THREE.BoxGeometry(scale, scale, scale)
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const axisHelper = new THREE.AxesHelper(50)
    scene.add(axisHelper)

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    })
    renderer.setSize(WIDTH, HEIGHT)

    function animate() {
      animationId = requestAnimationFrame(animate)
      mesh.rotation.y += 0.008
      renderer!.render(scene, camera)
    }

    animate()
  }

  function stop() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    if (renderer) {
      renderer.dispose()
      renderer = null
    }
  }

  return { start, stop }
}
