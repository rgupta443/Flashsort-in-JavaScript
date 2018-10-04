//flashsort is powerful than quick sort,
function flashsort(a) {
    var max = 0;
    var min = a[0];
    var n = a.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);
 
    for (var i = 1; i < n; ++i) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] > a[max]) {
            max = i;
        }
    }
 
 
    if (min === a[max]) {
        return a;
    }
 
    var c1 = (m - 1) / (a[max] - min);
 
 
    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (a[j] - min));
        ++l[k];
    }
 
    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }
 
    var hold = a[max];
    a[max] = a[0];
    a[0] = hold;
 
    //permutation
    var move = 0;
    var j = 0, t;
    var k = m - 1;
    var flash;
 
    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (a[j] - min));
        }
        if (k < 0) break;
        flash = a[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = a[t = --l[k]];
            a[t] = flash;
            //console.log("Cycle counter:"+move+"\t\t"+a);
            flash = hold;
            ++move;
        }
    }
 
    //insertion
    for (var j = 1; j < n; j++) {
        hold = a[j];
        var i = j - 1;
        while (i >= 0 && a[i] > hold) {
            a[i + 1] = a[i--];
        }
        a[i + 1] = hold;
    }
    return a;
    //console.log(a);
}
