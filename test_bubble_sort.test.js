const bubbleSort = require('./bubble_sort.js');


test("Test bubbleSort ascending sort", () => {
    input = [3, 2, 1];
    expected = [1, 2, 3];
    received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort descending sort", () => {
    input = [1, 2, 3];
    expected = [3, 2, 1];
    received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort already sorted, ascending", () => {
    input = [1, 2, 3];
    expected = [1, 2, 3];
    received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort already sorted, descending", () => {
    input = [3, 2, 1];
    expected = [3, 2, 1];
    received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort cannot be sorted, ascending", () => {
    input = [1, 1, 1];
    expected = [1, 1, 1];
    received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort cannot be sorted, descending", () => {
    input = [1, 1, 1];
    expected = [1, 1, 1];
    received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort ascending sort, long", () => {
    input = [9, 5, 6, 3, 8, 0, 7, 1, 4, 2];
    expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    received = bubbleSort(input);
    console.log(received)
    expect(received).toEqual(expected);
});


test("Test bubbleSort descending sort, long", () => {
    input = [9, 5, 6, 3, 8, 0, 7, 1, 4, 2];
    expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});
