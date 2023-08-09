const numbers =[1,2,3,4,5]

const randomNum =(numbers)=>{
    const [first,second,...rest] =numbers;
    const last =rest.pop();
    return [first,second,last]
}
const randomNumer =randomNum(numbers)
console.log(randomNumer);