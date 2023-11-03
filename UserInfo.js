// Get all the users info (complete info) who has the email which ends with .gov

import countryJSON from './countryJSON.json';

function getAllUsersInfoEmailEndsWithgov(countryJSON){
    
    const countryList = [...countryJSON];
    const userInfo = [];

    countryList.filter((country)=>{
        if(country.email.endsWith(".gov"))
            userInfo.push(country);     
    });
    
    return userInfo;
}

console.log(getAllUsersInfoEmailEndsWithgov(countryJSON));
// return userInfo;
// console.log(userInfo);