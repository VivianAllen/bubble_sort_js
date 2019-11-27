const bubbleSort = require('./bubble_sort.js');


test("Test bubbleSort ascending sort", () => {
    input = [3, 2, 1];
    expected = [1, 2, 3];
    received = bubbleSort(input, 'asc');
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
    received = bubbleSort(input, 'asc');
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
    received = bubbleSort(input, 'asc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort cannot be sorted, descending", () => {
    input = [1, 1, 1];
    expected = [1, 1, 1];
    received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});
