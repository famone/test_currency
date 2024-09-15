import { defineStore } from 'pinia';
import axios from 'axios';
import { CurrencyRates } from '@/types/currency';


interface State {
  rates: CurrencyRates | null
  mainCurrency: string 
}

export const useCourseStore = defineStore('course', {
  state: (): State => {
    return {
      rates: null,
      mainCurrency: 'rub'
    };
  },
  getters: {
   
  },
  actions: {
    async LOAD_CURRENCIES() {
      try {
        const { data } = await axios.get<CurrencyRates>('https://status.neuralgeneration.com/api/currency');
        this.rates = data;
      } catch {
        alert('Ошибка загрузки курсов!');
      }
    },
  }
});