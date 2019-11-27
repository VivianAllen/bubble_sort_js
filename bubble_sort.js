function bubbleSort(ary, order) {

    function comp(x, y, order) {
        if (order=='asc') {
            return x > y;
        } else {
            return x < y;
        };
    };

    for (i=0; i < ary.length; i++) {
        for (j=0; j <= i; j++) {
            if (comp(ary[j], ary[j+1], order)) {
                [ary[j], ary[j+1]]  = [ary[j+1], ary[j]];
            };
        };
    };
    return ary;

};

module.exports = bubbleSort;
