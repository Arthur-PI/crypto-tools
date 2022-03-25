import {useState} from "react";
import Tool from "../Tool";
import Help from "../Help";

import '../../css/components/tools/Invertibles.css';
import invertibles from "../../algos/invertibles";

const Invertibles = () => {
	const [n, setN] = useState(null);
	const [res, setRes] = useState(null);

	return (
		<Tool title={"Invertibles in Z/nZ"}>
			<div className={"tool-content"}>
				<p>Calculate all numbers that have an <Help url={"https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"}>inverse</Help> in Z/nZ :</p>
				<div>
					<span>Z/</span>
					<input
						value={n}
						onChange={(e) => setN(parseInt(e.target.value))}
						placeholder={"n"}
						className={"number-input"}
						type="number"
					/>
					<span>Z</span>
					<button onClick={() => setRes(invertibles(n))}>Check</button>
					<p style={{marginTop: '10px'}}>
						{res?.map((inv, id) => {
							return (<span key={id}>{id === 0 ? '': ', '}{inv}</span>);
						})}
					</p>
				</div>
			</div>
		</Tool>
	)
};

export default Invertibles;
