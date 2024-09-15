
export function useCurrency(){

  const mainCurrencies = [
    'rub', 
    'usd', 
    'eur', 
    // 'brl', 
    // 'kzt', 
    // 'idr'
  ];
  
  const formatToHundredths = (val: number) =>{
    return parseFloat(val.toFixed(2));
  };
  

  return {
    mainCurrencies,
    formatToHundredths
  };
}