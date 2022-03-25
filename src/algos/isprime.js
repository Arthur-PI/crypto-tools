const isprime = async (n) => {
	let i;
	let sqrt;

	if (n === 2)
		return true;
	if (n < 2 || n % 2 === 0)
		return false;
	i = 3;
	sqrt = Math.sqrt(n);
	while (i <= sqrt)
	{
		if (n % i === 0)
			return false;
		i++;
	}
	return true;
};

export default isprime;
