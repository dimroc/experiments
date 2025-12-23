<script setup lang="ts">
import { firstProjects, lastProjects } from '~/data/projects'
</script>

<template>
  <ul class="list-none mt-8 p-0 grid grid-cols-1 md:grid-cols-2 gap-1">
    <ProjectCard
      v-for="project in firstProjects"
      :key="project.key"
      :project="project"
    />

    <li class="p-3">
      <SubscribeForm />
    </li>

    <ProjectCard
      v-for="project in lastProjects"
      :key="project.key"
      :project="project"
    />
  </ul>
</template>
