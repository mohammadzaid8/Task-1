function divisible(n){
   return (n % 100 === 0) ? true : false;
   
}

function reverseCapitalize(str){
    return str.toUpperCase().split('').reverse().join('');
}

function triArea(b,h){
    return (b * h)/2;
}

function factorial(n){
    if(n === 0){
        return 1;
    }

    return n * factorial(n-1);
}

function nTablesPlusOne(n){
    let tempArr=[];

    for(let i=1;i<=10;i++){
        tempArr.push((n*i)+1);
    }

    return tempArr.join(',');
}

// console.log(divisible(10))
// console.log(reverseCapitalize("hellothere"))
// console.log(triArea(3,2))
// console.log(factorial(0))
// console.log(nTablesPlusOne(1));