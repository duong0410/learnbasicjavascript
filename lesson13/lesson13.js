console.log('Hello world from HTML');
let arr = ['a','b','c','d'];
let i = 0;
while(i < arr.length){
    if( i === 2 ){
        console.log('item: ',arr[i]);
    } else if (i === 3){
        console.log('item: ',arr[i]);
    }
    i++;
}
let j = 0;
while(j < arr.length){
    console.log('check j: ',j);
    if(arr[j] === 'b'){
        console.log('found it');
        break;
    }
    j++;
}