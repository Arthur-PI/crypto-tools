const extended_euclid = (a, b) => {
	let i;
	const cache = [];

	cache.push([0, a, 1, 0]);
	cache.push([0, b, 0, 1]);
	i = 2;
	while (cache[i - 1][1] !== 0) {
		cache.push([]);
		cache[i].push(~~(cache[i - 2][1] / cache[i - 1][1]));
		cache[i].push(cache[i - 2][1] % cache[i - 1][1]);
		cache[i].push(cache[i - 2][2] - cache[i][0] * cache[i - 1][2]);
		cache[i].push(cache[i - 2][3] - cache[i][0] * cache[i - 1][3]);
		i++;
	}

	return {x: cache[i - 2][2], y: cache[i - 2][3], gcd: cache[i - 2][1]};
}

export default extended_euclid;
