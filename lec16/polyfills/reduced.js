Array.prototype.reduced = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
    const arr = this;

    if (accumulator === undefined) {
        accumulator = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
};
