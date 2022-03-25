import { useState } from "react";
import Tool from "../Tool";
import gcd from '../../algos/gcd';

import '../../css/components/tools/Gcd.css';
import Help from "../Help";


const Gcd = () => {
	const [a, setA] = useState(null);
	const [b, setB] = useState(null);
	const [res, setRes] = useState(null);

	return (
		<Tool title={"Compute GCD"}>
			<div className={"tool-content"}>
				<p>Compute the <Help url={"https://en.wikipedia.org/wiki/Greatest_common_divisor"}>GCD</Help> (Greatest Common Divisor) of two numbers, a and b :</p>
				<div>
					<span>GCD ( </span>
					<input
						value={a}
						onChange={(e) => setA(parseInt(e.target.value))}
						className={"number-input"}
						placeholder={"a"}
						type="number"
					/>
					<span> , </span>
					<input
						value={b}
						onChange={(e) => setB(parseInt(e.target.value))}
						className={"number-input"}
						placeholder={"b"}
						type="number"
					/>
					<span> ) </span>
					<button onClick={() => setRes(gcd(a, b))}>=</button>
					<span> {res}</span>
				</div>
			</div>
		</Tool>
	)
};

export default Gcd;
