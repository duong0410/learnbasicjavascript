console.log('Hello world from HTML');
// let arr = [1,2,3,4,5,6,7,8,9,10];
let arr = [
    { name: 'A',age: 25 },
    { name: 'B',age: 26 },
    { name: 'C',age: 27 },
    { name: 'D',age: 28 },
    { name: 'E',age: 25 },
]

let filter = arr.filter((item,index)=>{
    console.log('check item:',item,'index:',index);
    return item && item.age == 25;
});
console.log(filter);