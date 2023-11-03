// getPaginatedResult(pageNumber, pageSize);

// getPaginatedResult(4, 25)


// [1-25]
// [25-20]
// [21-30]
// [31-40]

import userData from './userData.json';


function getPaginatedResult(pageNumber,pageSize){
    
    const userDataArray = [...userData];
    
    if (!Array.isArray(userDataArray) && userData.length!==0){
        console.error("Invalid data");
        return false;
    }
    
    const totalPages = Math.ceil(userDataArray.length / pageSize);
    
    //type check
    if (typeof pageNumber === 'number' && typeof pageSize === 'number' && !(pageNumber<=0)  && !(pageSize<=0) && pageNumber<=totalPages){ 
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return userDataArray.slice(startIndex, endIndex);
    }
    else{
        console.error("Invalid page number or page size");
        return false;
    }
}

console.log(getPaginatedResult(2,20));

//console.log(userDataArray.length)
// console.log(totalPages);
// && !(pageNumber>=userDataArray.length)
