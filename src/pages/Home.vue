<template>
  <div class="overflow-hidden rounded-lg ">
    <!-- <table
      v-if="courseStore.rates"
      class="w-full table-fixed"
    >
      <thead class="bg-gray-200">
        <tr>
          <th class="p-3 text-start">
            Валюта
          </th>
          <th class="p-3 text-start">
            Курс
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in controlRates"
          :key="index"
          class="even:bg-gray-100"
        >
          <td class="p-3 uppercase">
            {{ item.name }}
          </td>
          <td class="p-3 font-semibold">
            {{ formatToHundredths(item.value) }}
          </td>
        </tr>
      </tbody>
    </table> -->
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