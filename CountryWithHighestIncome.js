// 1. Find the country which has the highest income.

import countryJSON from './countryJSON.json';

function findCountryWithHighestCombinedIncome(countryJSON) {
    const countryList = [...countryJSON];

    //sort in descending order to get highest income
    countryList.sort((a,b)=> b.income - a.income);

    //country which has highest combined income
    return [countryList[0].country , countryList[0].income];
}


console.log("The Country With Highest Income : ",findCountryWithHighestCombinedIncome(countryJSON));

// findCountryWithHighestCombinedIncome(country_List);
// console.log(countryList[0].country,countryList[0].income);