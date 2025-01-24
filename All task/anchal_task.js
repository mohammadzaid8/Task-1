function addUp(n){
    if(n === 0){
        return n;
    }
    return n + addUp(n - 1 );
}

function sumDigit(n){
    if(n === 0){
        return n;
    }

    return (n % 10) + sumDigit(Math.floor(n/10));
}


function isAutomorphic(n){
    let square = Math.pow(n,2);

    if(n === (square % 10)){
        return true;
    }
    else{
        return false;
    }
}

function makesTen(num1,num2){
    if( num1 === 10 || num2 === 10){
        return true;
    }

    if((num1 + num2) === 10){
        return true;
    }

    return false;
}

function keyboardMistakes(str){
    let temparr = str.split('')
    
    temparr.forEach((char,index) => {
        if(char === '4'){
            temparr[index]='A'
        }
        else if(char === '5'){
            temparr[index]='S'
        }
        else if(char === '0'){
            temparr[index]='O'
        }
        else if(char === '1'){
            temparr[index]='I'
        }
    });

    return temparr.join('');
}

// console.log(addUp(1000))
// console.log(sumDigit(223))
// console.log(isAutomorphic(8))
// console.log(makesTen(9, 7))
// console.log(keyboardMistakes("51NG4P0RE"))