function rectangles(n){
    return Math.pow((n*(n+1))/2,2)
}

function addUpTo(n){
    return (n*(n+1))/2;
}

function getSumOfItems(arr){
    return arr.reduce((sum,e)=> sum += e ,0)
}

function integerBoolean(str){
    const arr=str.split('');

    arr.forEach((e,i)=> (Number(e) == true)? arr[i]=true:arr[i]=false)

    return arr;
}

function findLargestNums(arr){
    const largeArr=[];

    for(let i=0;i<arr.length;i++){
        let sort=arr[i].sort((a,b)=>a-b);
        largeArr[i]=sort[sort.length-1]
    }

    return largeArr;
}
// console.log(rectangles(3))
// console.log(addUpTo(10))
// console.log(getSumOfItems([45, 3, 0]))
// console.log(integerBoolean("001"))
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))