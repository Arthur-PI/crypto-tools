const gcd = (a, b) => {
	let reminder = a % b;
	while (reminder !== 0) {
		a = b;
		b = reminder;
		reminder = a % b
	}
	return b;
}

export default gcd;
