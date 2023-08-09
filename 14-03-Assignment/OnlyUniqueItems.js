const numbers =[1,2,3,4,5,6,6,5,4,3,2,9]

const uniqueItems =(numbers)=>{

    const mySet =new Set(numbers);
    return  mySet
}
const mySet =uniqueItems(numbers)
console.log(mySet);