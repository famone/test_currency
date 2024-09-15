<template>
  <div class="bg-gray-100 grid grid-cols-2 gap-0.5 divide-x-2 p-1 rounded">
    <div class="col-span-1">
      <input
        v-model="amount"
        type="text"
        class="default-input"
        @input="onInput($event)"
      >
    </div>
    <div class="col-span-1">
      <select 
        v-model="currency"
        class="default-select"
        @change="emit('calculate', type === 'to');"
      >
        <option
          v-for="(item, index) in items"
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

const emit = defineEmits(['calculate']);

type Props = {
  items: string[]
  type: 'from' | 'to'
}

const { items, type } = defineProps<Props>();

const amount = defineModel<number | string>('amount');
const currency = defineModel<string>('currency');

const onInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;

  // онли цифры
  const filteredInput = input.replace(/[^0-9.]/g, '');

  // одна точка
  const dotFilteredInput = filteredInput.indexOf('.') !== -1
    ? filteredInput.split('.').slice(0, 2).join('.')
    : filteredInput;

  // до 2х знаков
  const limitedDecimalsInput = dotFilteredInput.indexOf('.') !== -1
    ? dotFilteredInput.replace(/(\.\d{2})\d+/, '$1')
    : dotFilteredInput;

  amount.value = limitedDecimalsInput;
  emit('calculate', type === 'to');
};

</script>

<style scoped>

</style>