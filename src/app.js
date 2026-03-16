function findMin(arr) {
    let min = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;

}

console.log(findMin([5, 2, 9, 3]));