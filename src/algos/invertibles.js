import gcd from "./gcd";

const invertibles = (n) => {
	const inv = [];

	for (let i = 0; i < n; i++) {
		if (gcd(i, n) === 1)
			inv.push(i);
	}
	return inv;
};

export default invertibles;
