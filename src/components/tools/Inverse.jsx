import {useState} from "react";
import Tool from "../Tool";
import Help from "../Help";
import inverse from "../../algos/inverse";

import '../../css/components/tools/Inverse.css';

const Inverse = () => {
	const [x, setX] = useState(null);
	const [n, setN] = useState(null);
	const [res, setRes] = useState(null);

	return (
		<Tool title={"Inverse"}>
			<div className={"tool-content"}>
				<p>Compute the inverse of a number x in Z/nZ :</p>
				<div>
					<span>Inv(</span>
					<input
						value={x}
						onChange={(e) => setX(parseInt(e.target.value))}
						className={"number-input"}
						type="number"
					/>
					<span>) in Z/</span>
					<input
						value={n}
						onChange={(e) => setN(parseInt(e.target.value))}
						className={"number-input"}
						type="number"
					/>
					<button onClick={() => setRes(inverse(x, n))}> = </button>
					<span> {res}</span>
				</div>
			</div>
		</Tool>
	)
};

export default Inverse;
