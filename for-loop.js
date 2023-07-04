let num = [10,20,3,8,7,9,12];
for(let i=0;i<num.length;i++){
    console.log([i]);
    console.log(num[i]);
}

for (let i=0;i<num.length;i++){
    console.log({i});
    if(i===3){
        break;
    }
}

for (let i=0;i<num.length;i++){
   
    if(i===3){
        continue;
    }
    console.log({"continue":i});
}

let num1=[10,20,30,40,50,60];
for(i=0;i<num1.length;i++){
    if(i%2)
    console.log(num1[i]);
}

for (i=0;i<num1.length;i++){
    if(i===3){
        continue;
    }
    console.log(num1[i])
}