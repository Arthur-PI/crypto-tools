import Help from "../Help";
import Tool from "../Tool";

import '../../css/components/tools/ExtendedEuclid.css';
import gcd from "../../algos/gcd";
import {useState} from "react";
import extended_euclid from "../../algos/extended_euclid";

const ExtendendEuclid = () => {
	const [a, setA] = useState(null);
	const [b, setB] = useState(null);
	const [res, setRes] = useState(null);

	return (
		<Tool title={"Extended Euclid"}>
			<div className={"tool-content"}>
				<p>Compute the <Help url={"https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm"}>extended Euclid algorithm</Help> to find two numbers x, y such as GCD(a,b) = ax + by :</p>
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
					<button onClick={() => setRes(extended_euclid(a, b))}>=</button>
					<span> {res !== null ? res.x: 'x'}a + {res !== null ? res.y: 'y'}b {res !== null ? '= ' + res.gcd: ''}</span>
				</div>
			</div>
		</Tool>
	);
};

export default ExtendendEuclid;
