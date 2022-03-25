import '../css/components/Help.css';

const Help = (props) => {
	return (
		<a href={props.url} className={"help-link"} target={"_blank"}>
			{props.children}
		</a>
	);
};

export default Help;
