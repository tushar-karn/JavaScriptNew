const calcAge1 = BirthYear => 2024 - BirthYear;
const ans = calcAge1(2003);
console.log(ans);

const YearsToRetire = (Name , BirthYear ) =>{
   return(`${Name} retires in ${60-(2024-BirthYear)} year's`);
}

console.log(YearsToRetire('Tushar Karn' , 2003));
console.log(YearsToRetire('Saurav Kumar' , 2002));