function leapYear(n) {
    if (n % 4 === 0) {
        return true;
    }

    return false;
}

function checkPalindrome(str) {
    if (str === (str.split('').reverse().join(''))) return true;

    return false;
}

function invertArray(arr) {
    arr.forEach((e, i) => arr[i] = e * -1)

    return arr;
}

function arrayValuesTypes(arr) {
    const tempArr = arr.map((e) => typeof e);

    return tempArr;
}

function squaresSum(n) {
    if (n === 1) {
        return n;
    }

    return Math.pow(n, 2) + squaresSum(n - 1);
}

// console.log(leapYear(2021))
// console.log(checkPalindrome('scary'))
// console.log(invertArray([1, -2, 3, -4, 5]))
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// console.log(squaresSum(13))