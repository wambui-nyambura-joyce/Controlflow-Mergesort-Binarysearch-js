function divideArray(arr){
    if(arr.length <=1){
        return arr
    }
    let middle =Math.floor(arr.length/2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);
    console.log((left))
    console.log((right))

    return sortedArray(divideArray(left),divideArray(right))
    
    function sortedArray(left,right){
    let emptyArray=[];
    // console.log("left2",left);
    // console.log("right2",right);
    while(left.length && right.length)
    // console.log("left3",left);
    // console.log("right3",right);
    if (left[0]<right[0]){
        emptyArray.push(left.shift());
console.log(emptyArray);
    }else{
        emptyArray.push(right.shift());
    }
    console.log(emptyArray);
    return[...emptyArray,...left,...right];
}
}
let arr=[3,10,2,26,15,11,4,];
console.log(divideArray(arr));