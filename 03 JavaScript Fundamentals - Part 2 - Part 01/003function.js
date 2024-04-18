function logger() {
    console.log("Hello Tushar");
}

// calling / running / invoking function 
logger();  
logger();  
logger();  


function foodProcessor(apples , oranges ){
    // console.log(`juice is make with ${apples} apples and ${oranges} oranges `);
    const val = `juice is make with ${apples} apples and ${oranges} oranges `;
    return val;
}

const ans = foodProcessor(3,5);
console.log(ans);