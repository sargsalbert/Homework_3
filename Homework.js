//Task bubble sorting two for
const sorting = (arr) => {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

console.log(sorting([0, 44, 7, 4, 5, 9, 3, 8]));



// Task 1
const digitsOdd = (num) => {

    dig = num % 10;

    if (num === 0) {
        return true
    }
    if (dig % 2 === 0) {
        return false
    }

    num = Math.floor(num / 10);

    return digitsOdd(num)
}

console.log(digitsOdd(4211133));
console.log(digitsOdd(7791));
console.log(digitsOdd(5));



// Task 2
const removeFIrstEl = (arr, index = 0, min = Infinity) => {

    if (index === arr.length) {
        return min === Infinity ? -1 : min;
    }

    if (arr[index] < min && arr[index] >= 0) {
        return removeFIrstEl(arr, index + 1, arr[index]);
    } else {
        return removeFIrstEl(arr, index + 1, min);
    }

}

console.log(removeFIrstEl([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(removeFIrstEl([45, -9, 15, 5, -78]));
console.log(removeFIrstEl([-5, -9, -111, -1000, -7]));



// Task 3
const sortViolatedIndex = (arr, index = 0) => {

    if (index === arr.length) {
        return -1
    } else if (arr[index] > arr[index + 1]) {
        return index;
    }
    return sortViolatedIndex(arr, index + 1);
}

console.log(sortViolatedIndex([2, 12, 15, 48, 64]));
console.log(sortViolatedIndex([-9, -4, -4, 3, 12, 4, 5]));



// Task 4
const fibonacci = (n) => {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(3));




