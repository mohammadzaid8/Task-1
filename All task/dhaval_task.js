function sortByLength(arr) {
    return  arr.sort((a,b)=> a.length - b.length);
}

function sumOfCubes(arr){

    if(arr == ''){
        return 0;
    }

    let sum=0;

    for (const element of arr) {
        sum+=Math.pow(element,3);
    }

    return sum;
}

function area(l,b){
    if( l <= 0 || b <= 0){
        return -1;
    }

    return l * b;
}

function sumDigits(n){
    let digit=0;

    while(n > 0 ){
        n = Math.floor(n/10);
        digit ++;
    }
    return digit;
}

function evenOrOdd(strNum){
   const arr=strNum.split('');

  let evenSum=0,oddSum=0;

  for(let i=0;i<arr.length;i++){
        if(Number(arr[i]) % 2 === 0){
            evenSum += Number(arr[i])
        }else{
            oddSum += Number(arr[i])
        }
  }

   if(evenSum < oddSum){
    return "Odd is greater than Even"
   }
   else if(evenSum > oddSum){
    return "Even is greater than Odd"
   }
   else{
    return "Both are same"
   }
}

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello", "google"]))
// console.log(sumOfCubes([]))
// console.log(area(-1,4))
// console.log(sumDigits(1))
// console.log(evenOrOdd("23456"))