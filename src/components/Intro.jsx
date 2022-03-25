import '../css/components/Intro.css';

const Intro = ({title, description}) => {
	return (
		<div className={"intro"}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
};

export default Intro;
