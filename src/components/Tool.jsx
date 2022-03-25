import { useState } from "react";
import { Collapse } from "react-collapse";

import '../css/components/Tool.css';
import {ReactComponent as Arrow} from '../assets/triangle.svg';

const Tool = (props) => {
	const [folded, setFolded] = useState(true);
	return (
		<div className={`tool${folded ? "" : " active"}`}>
			<div className={"banner"} onClick={() => setFolded(!folded)}>
				<Arrow />
				<h2>{props.title}</h2>
			</div>
			<Collapse isOpened={!folded}>
				{props.children}
			</Collapse>
		</div>
	)
};

export default Tool;
