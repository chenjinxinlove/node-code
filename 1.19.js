let m, a, b, c, sum;

for (m = 100; m < 1000; m++) {
    a = parseInt(m / 100);
    b = parseInt((m - a * 100) / 10);
    c = parseInt(m - a * 100 - b * 10);
    sum = a * a * a + b * b * b + c * c;
    if (m == sum) {
        console.log("%d", m);
    }
}