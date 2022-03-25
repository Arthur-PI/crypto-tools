import Tool from "../Tool";
import Help from "../Help";

import '../../css/components/tools/Equation.css';

const Equation = () => {
	return (
		<Tool title={"Solve Equation"}>
			<div className={"tool-content"}>
				<p>Compute if a number n is a <Help url={"https://en.wikipedia.org/wiki/Prime_number"}>prime</Help> :</p>
				<div>

				</div>
			</div>
		</Tool>
	)
};

export default Equation;
