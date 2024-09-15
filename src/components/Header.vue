<template>
  <div class="mt-6 mb-12">
    <h1 class="text-center text-xl mb-2 font-semibold">
      💸 SPA для конвертирования валют
    </h1>
    <div class="bg-teal-600 p-6 rounded-lg flex justify-between gap-4 items-center">
      <div class="flex gap-2 text-white">
        <router-link
          v-for="(item, index) in navs"
          :key="index"
          class="font-medium rounded-lg px-2 py-2 transition-all bg-slate-800 bg-opacity-20"
          :to="item.url"
          exact-active-class="!bg-opacity-100"
        >
          {{ item.text }}
        </router-link>
      </div>
      <select 
        v-model="courseStore.mainCurrency"
        class="header-select w-24"
      >
        <option
          v-for="(item, index) in mainCurrencies"
          :key="index"
          :value="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourseStore } from '@/stores/course';
import { useCurrency } from '@/helpers/currency';

const { mainCurrencies } = useCurrency();
const courseStore = useCourseStore();

const navs = [
  {
    text: 'Главная',
    url: '/'
  },
  {
    text: 'Конвертация',
    url: '/convert'
  },
];

</script>

<style scoped>

</style>