function bubbleSort(ary, order='asc') {

    function comp(x, y, order) {
        if (order=='asc') {
            return x > y;
        } else {
            return x < y;
        };
    };

    for (i=ary.length; i > 0; i--) {
        for (j=0; j <= i; j++) {
            if (comp(ary[j], ary[j+1], order)) {
                [ary[j], ary[j+1]]  = [ary[j+1], ary[j]];
            };
        };
    };

    return ary;

};

module.exports = bubbleSort;
