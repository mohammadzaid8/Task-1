function sumPolygon(n){
    return (n - 2) * 180;
}

function oddOrEven(str){
    if(str.length % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function calculator(num1,assignment,num2){

    if(assignment === '+'){
        return num1 + num2;
    }
    else if(assignment === '-'){
        return num1 - num2;
    }
    else if(assignment === '*'){
        return num1 * num2;
    }
    else {
        if(num2 === 0){
            return "Cann't divide with 0";
        }
        return num1 / num2 ;
    }
}

function highLow(str){

    const temparr = str.split(' ');

    return `${Math.max.apply(null,temparr)} ${Math.min.apply(null,temparr)}` 
}

function transform(arr){
    arr.forEach((element,index) => {
        if(element % 2 == 0){
            arr[index] = element - 1;
        } else{
            arr[index] = element + 1;
        }
    });

    return arr;
}

// console.log(sumPolygon(6))
// console.log(oddOrEven("apple"))
// console.log(calculator(4,'/',2))
// console.log(highLow('1 2 3 4'))
// console.log(transform([1,2,0,7,10]))