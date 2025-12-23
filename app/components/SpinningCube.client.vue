<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)
const { start, stop } = useSpinningCube()

onMounted(() => {
  if (canvasRef.value) {
    start(canvasRef.value)
  }
})

onUnmounted(() => {
  stop()
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute right-2.5 bottom-0" />
</template>
