let arr1= [3,7,34,90,12];
let lenght= arr1[arr1.length -1];
console.log(lenght);
let arr2=[true,"green","where",12,56];
let lenght2=arr2[arr2.length -1];
console.log(lenght2);
let myPets=["Cow","Bird","Snake","Dog"];
let x=myPets.join();
console.log(x);
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var sorted =arr3.sort((a,b)=>a -b);
console.log(sorted)
var arr=["apple", "mango","apple","orange","mango","mango"];
function del(arr){
    return[...new Set(arr)];
}
console.log(del(arr))
 
function duplicate(arr){
    return arr.filter((before,position) => arr.indexOf(before) !== position);

}

console.log(duplicate(arr));
let word="sevink";
let y= word.split("").reverse().join("");
console.log(y)

let arr5=["the", "way","x",4];
let z="we";
if (arr5.includes(z)){ 
    
    console.log(z);  
 }

 else{
    console.log("the search word was not found");
}
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var sorted =arr3.sort();
console.log(sorted)
  

 
    

