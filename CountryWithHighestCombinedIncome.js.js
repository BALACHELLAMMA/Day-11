// 2. Find the country which has the combined highest income

import countryJSON from './countryJSON.json';

function findCountryWithHighestCombinedIncome(countryJSON) {

  const countryList = [...countryJSON];
  const countryIncomes = {};
  
  // Calculate the total income for each country
  countryList.forEach(record => {
    const country = record.country;
    const income = record.income;
    
    // Add the income to the existing total for the country or  it to income if it doesn't exist
    if (country in countryIncomes) {
      countryIncomes[country] += income;
    } else {
      countryIncomes[country] = income;
    }
  });
  
  // Find the country with the highest total income
  let countryWithHighestIncome = null;
  let highestCombinedIncome = 0;
  
  // iterate and find highestCombinedIncome 
  for (const country in countryIncomes) {
    if (countryIncomes[country] > highestCombinedIncome) {
      countryWithHighestIncome = country;
      highestCombinedIncome = countryIncomes[country];
    }
  }

  return countryWithHighestIncome;
}

console.log("The country with the highest combined income is:", findCountryWithHighestCombinedIncome(countryJSON));

//console.log("The combined income for this country is:", highestCombinedIncome);
//console.log(countryIncomes);
// console.log(countryIncomeArray);