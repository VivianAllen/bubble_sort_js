const bubbleSort = require('./bubble_sort.js');


test("Test bubbleSort ascending sort", () => {
    const input = [3, 2, 1];
    const expected = [1, 2, 3];
    const received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort descending sort", () => {
    const input = [1, 2, 3];
    const expected = [3, 2, 1];
    const received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort already sorted, ascending", () => {
    const input = [1, 2, 3];
    const expected = [1, 2, 3];
    const received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort already sorted, descending", () => {
    const input = [3, 2, 1];
    const expected = [3, 2, 1];
    const received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort cannot be sorted, ascending", () => {
    const input = [1, 1, 1];
    const expected = [1, 1, 1];
    const received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort cannot be sorted, descending", () => {
    const input = [1, 1, 1];
    const expected = [1, 1, 1];
    const received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});


test("Test bubbleSort ascending sort, long", () => {
    const input = [9, 5, 6, 3, 8, 0, 7, 1, 4, 2];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const received = bubbleSort(input);
    expect(received).toEqual(expected);
});


test("Test bubbleSort descending sort, long", () => {
    const input = [9, 5, 6, 3, 8, 0, 7, 1, 4, 2];
    const expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const received = bubbleSort(input, 'desc');
    expect(received).toEqual(expected);
});
