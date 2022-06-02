import {useState} from "react";
import Tool from "../Tool";
import Help from "../Help";
import prime_factor from "../../algos/prime_factor";

import '../../css/components/tools/PrimeFactor.css';

const PrimeFactor = () => {
	const [n, setN] = useState(null);
	const [res, setRes] = useState([]);
	const handleClick = (e) => {
		prime_factor(n).then((value) => {
			setRes(value);
		});
	};
	return (
		<Tool title={"Prime Factor"}>
			<div className={"tool-content"}>
				<p>Compute the <Help url={"https://www.cuemath.com/numbers/prime-factorization/"}>prime factors</Help> of a number n :</p>
				<div>
					<span>n = </span>
					<input
						value={n}
						onChange={(e) => setN(parseInt(e.target.value))}
						className={"number-input"}
						type="number"
					/>
					<button onClick={handleClick}>Compute</button>
					<p style={{marginTop: '10px'}}>
						{res.map((factor, id) => {
							return (<span key={id}>{id === 0 ? '': ', '}{factor}</span>);
						})}
					</p>
				</div>
			</div>
		</Tool>
	);
};

export default PrimeFactor;
