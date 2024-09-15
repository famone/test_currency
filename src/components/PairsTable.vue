<template>
  <table
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
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCurrency } from '@/helpers/currency';
import { CurrencyRates } from '@/types/currency';

const { formatToHundredths, mainCurrencies } = useCurrency();

type Props = {
  rates: CurrencyRates
  mainCurrency: string
}

const { rates, mainCurrency} = defineProps<Props>();

const controlRates = computed(() => {
  if(!rates) return null;
  return Object.entries(rates)
    .filter(([key]) => key.endsWith(mainCurrency))
    .map((i) => { return { name: i[0], value: i[1] };})
    .filter((i) => mainCurrencies.includes(i.name.slice(0, 3)));

});
</script>

<style scoped>

</style>