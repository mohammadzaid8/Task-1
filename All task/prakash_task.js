function minMax(arr){
    let max= Math.max.apply(null,arr)
    let min=Math.min.apply(null,arr)
    
    return [min,max];
}
function canNest(arr1,arr2){
    let i=0,j=0;
    
    while(i<arr1.length || j<arr2.length){
        for(let k=0;k<arr1.length;k++){
            if(arr1[k] === arr2[j]) return false;
        }
        i++;
        j++;
    }
    return true;

}

function isSameNum(num1,num2){
    return num1 === num2;
}

function sayHelloBye(str,flag){
    if(flag === 1){
        return "Hello"+" "+str;
    }else{
        return "Bye"+" "+str;
    }
}

function findIndex(strArr,str){
    for(let i=0;i<strArr.length;i++){
        if(strArr[i] == str){
            return i;
        }
    }
}

// console.log(minMax([1]))
// console.log(canNest([9, 9, 8], [1,2]))
// console.log(isSameNum(2,2))
// console.log(sayHelloBye("Tomi", 0))
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));