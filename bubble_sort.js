function bubbleSort(ary, order) {
    for (i=0; i < ary.length; i++) {
        for (j=0; j <= i; j++) {
            if ( ary[j] > ary[j+1] ) {
                [ary[j], ary[j+1]]  = [ary[j+1], ary[j]];
            };
        };
    };
    return ary;
};

module.exports = bubbleSort;
