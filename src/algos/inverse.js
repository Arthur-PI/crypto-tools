import extended_euclid from "./extended_euclid";

const inverse = (x, n) => {
	let inv = extended_euclid(x, n).x % n;
	if (inv < 0) inv += n;
	return (inv);
}

export default inverse;
