import {useState} from "react";
import Tool from "../Tool";
import Help from "../Help";

import isprime from "../../algos/isprime";

const Prime = () => {
	const [n, setN] = useState(null);
	const [res, setRes] = useState(null);
	return (
		<Tool title={"Compute Prime"}>
			<div className={"tool-content"}>
				<p>Compute if a number n is a <Help url={"https://en.wikipedia.org/wiki/Prime_number"}>prime</Help> :</p>
				<div>
					<span>n = </span>
					<input
						value={n}
						onChange={(e) => setN(parseInt(e.target.value))}
						className={"number-input"}
						type="number"
					/>
					<button onClick={() => setRes(isprime(n))}>Check</button>
					<span style={{color: 'var(--' + (res ? 'green': 'red') + ')'}}>   {res !== null && (res ? "TRUE": "FALSE")}</span>
				</div>
			</div>
		</Tool>
	)
};

export default Prime;
