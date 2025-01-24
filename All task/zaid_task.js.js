function addOnToN(n) {

    if (n === 1) {
        return n;
    }

    return n + addOnToN(n - 2);
}

function numArgs() {
    return arguments.length;
}

function largestNumbers(n, arr) {
    const sortArrDecending = arr.sort((a, b) => b - a);

    const finalArr = [];
    for (let i = n - 1; i >= 0; i--) {
        finalArr.push(sortArrDecending[i])
    }

    return finalArr;
}

function swap(a, b, c) {

    const c_compare_a = (c === a);
    const c_compare_b = (c === b);

    while (c_compare_a) {
        return b;
    }
    while (c_compare_b) {
        return a;
    }

}

function lessThanOrEqualToZero(n) {

    if (n > 0) {
        return true;
    } else {
        return false;
    }

}

console.log(addOnToN(13));
console.log(numArgs({},{}));
console.log(largestNumbers(2, [7, 19, 4, 2]));
console.log(swap(27, 31, 27));
console.log(lessThanOrEqualToZero(-5));