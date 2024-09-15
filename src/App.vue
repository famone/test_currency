<template>
  <div class="container px-4 md:px-0 md:mx-auto">
    <Header />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import { useCourseStore } from '@/stores/course';

const courseStore = useCourseStore();

onMounted(() => {
  courseStore.LOAD_CURRENCIES();
});
</script>

<style scoped>

</style>
