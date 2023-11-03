// 3.Get all the users info (complete info) who has the email which ends with .gov
import userData from './userData.json';

//check it's a valid email or not
function validateEmail(inputEmail) {
    const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmailRegex.test(inputEmail.toLowerCase());
}


function getAllUsersInfoEmailEndsWithgov(userData){
    
    const userDataArray = [...userData];

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

    //filter the userinfo who has email ends with ".gov"
    const userInfo = userDataArray.filter((user)=>user.email.endsWith(".gov"));
    return userInfo;
}

console.log(getAllUsersInfoEmailEndsWithgov(userData));

