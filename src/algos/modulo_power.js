const modulo_power = (x, p, n) => {
    let res = x;
    while (p > 1) {
        res *= x;
        res %= n
        p--;
    }
    return res;
}

export default modulo_power;