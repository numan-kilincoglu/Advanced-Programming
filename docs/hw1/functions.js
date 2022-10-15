
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function range2(start, end, step) {
    let array = [];

    if (step == undefined) {
        return array = range(start, end);
    } else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            if (i < end) {
                break;
            }
            array.push(i);
        }
        return array;
    } else {
        for (let i = start; i <= end; i += step) {
            if (i > end) {
                break;
            }
            array.push(i);
        }
        return array;
    }
}

function sum(array) {
    if (!Array.isArray(array)) return;
    let counter = 0;
    array.forEach(e => counter += e);
    return counter;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range2(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));