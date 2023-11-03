import userData from './userData.json';

function validateEmail(inputEmail) {
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmailRegex.test(inputEmail.toLowerCase());
}

const userDataArray = [...userData];

// 2. Find the country which has the combined highest income
function findCountryWithHighestCombinedIncome(userDataArray) {

  //type and length check
  if(!Array.isArray(userDataArray) && userDataArray.length === 0){
    console.error("Invalid input");
    return false;
  }

  //check any invalid data in user data array
  if(!userDataArray.every((user)=> typeof user.first_name ==='string' && user.first_name !== '' && typeof user.last_name ==='string' && user.last_name !== '' && typeof user.email === 'string' && validateEmail(user.email) && typeof user.gender === 'string'  && user.gender !== '' && typeof user.country === 'string' && user.country!=='' && typeof user.income === 'number' &&!(user.income < 0))){
    console.error(`Invalid data in user data array`);
    return false;
  }

  const countryIncomes = {};
  
  // Calculate the total income for each country
  userDataArray.forEach(record => {
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

console.log("The country with the highest combined income is:", findCountryWithHighestCombinedIncome(userDataArray));

//4.Find the country name which has the maximum combined income for Female
const countryListIncludeFemales = userDataArray.filter((country)=>country['gender'].toLowerCase() === 'female');
console.log("Find the country name which has the maximum combined income for Female is : " ,findCountryWithHighestCombinedIncome(countryListIncludeFemales));
