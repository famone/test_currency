<template>
  <div class="space-y-4">
    <NumericPairInput 
      v-model:amount="pair.from.value"
      v-model:currency="pair.from.currency"
      :items="mainCurrencies.filter((i) => i !== pair.to.currency)"
      type="from"
      @calculate="calculateCourse"
    />
    <RotateBtn @click="exchangeSides" />
    <NumericPairInput 
      v-model:amount="pair.to.value"
      v-model:currency="pair.to.currency"
      :items=" mainCurrencies.filter((i) => i !== pair.from.currency)"
      type="to"
      @calculate="calculateCourse"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { useCurrency } from '@/helpers/currency';
import { useCourseStore } from '@/stores/course';
import NumericPairInput from '@/components/NumericPairInput.vue';
import RotateBtn from '@/components/RotateBtn.vue';

const courseStore = useCourseStore();
const { mainCurrencies, formatToHundredths } = useCurrency();

const pair = reactive({
  from: {
    currency: 'usd',
    value: 1 as number | string
  },
  to: {
    currency: 'rub',
    value: 0 as number | string
  },
});

const calculateCourse = (toRowChange: boolean = false) => {
  if(!courseStore.rates) return;
  if(!toRowChange){
    const result = courseStore.rates?.[`${pair.from.currency}-${pair.to.currency}`] * Number(pair.from.value);
    pair.to.value = formatToHundredths(result);
  }else{
    const result = Number(pair.to.value) / courseStore.rates?.[`${pair.from.currency}-${pair.to.currency}`];
    pair.from.value = formatToHundredths(result);
  }
};

onMounted(() => {
  if(courseStore.rates){
    calculateCourse();
  }
});

watch(
  () => courseStore.rates,
  () => {
    calculateCourse();
  }
);

function exchangeSides(){
  const nv = {...pair.to};
  pair.to = pair.from;
  pair.from = nv;
  calculateCourse();
}

</script>

<style scoped>

</style>