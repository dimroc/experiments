<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <li class="p-3">
    <a
      :href="project.url"
      :class="[
        'project',
        project.key,
        'group block h-[150px] rounded-sm',
        'shadow-sm hover:shadow-lg',
        'transform transition-all duration-300 ease-out',
        'hover:-translate-y-1',
        'border border-gray-200 hover:border-gray-300'
      ]"
    >
      <h2 class="inline-block px-4 py-3 m-0 bg-white/90 text-lg text-gray-900 tracking-tight">
        {{ project.title }}
      </h2>
      <SpinningCube v-if="project.renderer === 'cube'" />
    </a>
  </li>
</template>
