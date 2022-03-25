
const prime_factor = async (n) => {
	const res = [];
	let p = 2;

	while (n >= p * p) {
		if (n % p === 0) {
			res.push(p);
			n /= p;
		}
		else p++;
	}
	res.push(n);
	return res;
}

export default prime_factor;
