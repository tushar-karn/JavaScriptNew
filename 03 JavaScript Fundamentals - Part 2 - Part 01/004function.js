// Function Declaration 

// it can be called before or after the declaration 
// console.log(calcAge1(2003));  

function calcAge1(BirthYear){
    return 2024 -BirthYear;
}

console.log(calcAge1(2003));

// Function Expression 

// it can be called only after the declaration 


const age2 = function (BirthYear){
    return 2024 -BirthYear;
}

const ans = age2(2003)
console.log(ans);
