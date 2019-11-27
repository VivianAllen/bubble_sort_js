const bubbleSort = require('./bubble_sort.js');

test("Test bubbleSort([3, 2, 1], 'asc') = [1, 2, 3]", () => {
    input = [3, 2, 1];
    expected = [1, 2, 3];
    received = bubbleSort(input, 'asc');
    expect(received).toEqual(expected);
});

