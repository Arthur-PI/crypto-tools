import { useState } from 'react';
import Tool from "../Tool";
import Help from "../Help";

import '../../css/components/tools/ModuloPower.css';
import modulo_power from '../../algos/modulo_power';

const ModuloPower = () => {
	const [x, setX] = useState(null);
	const [p, setP] = useState(null);
	const [n, setN] = useState(null);
	const [res, setRes] = useState(null);
	return (
		<Tool title={"Modulo Power"}>
			<div className={"tool-content"}>
				<p>Compute if a number n is a <Help url={"https://en.wikipedia.org/wiki/Prime_number"}>prime</Help> :</p>
				<div>
					<input
						value={x}
						onChange={(e) => setX(parseInt(e.target.value))}
						placeholder={"x"}
						className={"number-input"}
						type="number"
					/>
					<span>^</span>
					<input
						value={p}
						onChange={(e) => setP(parseInt(e.target.value))}
						placeholder={"p"}
						className={"number-input"}
						type="number"
					/>
					<span>mod</span>
					<input
						value={n}
						onChange={(e) => setN(parseInt(e.target.value))}
						placeholder={"n"}
						className={"number-input"}
						type="number"
					/>
					<button onClick={() => setRes(modulo_power(x, p, n))}>=</button>
					<span>{res}</span>
				</div>
			</div>
		</Tool>
	)
};

export default ModuloPower;
