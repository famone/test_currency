<template>
  <div class="overflow-hidden rounded-lg ">
    <PairsTable 
      v-if="courseStore.rates"
      :rates="courseStore.rates"
      :main-currency="courseStore.mainCurrency"
    />
  </div>
</template>

<script setup lang="ts">
import { useCourseStore } from '@/stores/course';
import PairsTable from '@/components/PairsTable.vue';

const courseStore = useCourseStore();

</script>

<style scoped>

</style>