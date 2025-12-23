<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()
</script>

<template>
  <li class="p-5">
    <a
      :href="project.url"
      :class="['project', project.key, 'h-[150px] border border-gray-300 block text-black hover:no-underline']"
    >
      <h2 class="inline-block p-5 m-0 bg-white/70 md:bg-white/70 text-xl">
        {{ project.title }}
      </h2>
      <SpinningCube v-if="project.renderer === 'cube'" />
    </a>
  </li>
</template>
