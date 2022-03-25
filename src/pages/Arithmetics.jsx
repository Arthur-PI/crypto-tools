import '../css/pages/Arithmetics.css';
import Intro from "../components/Intro";
import Gcd from "../components/tools/Gcd";
import Prime from "../components/tools/Prime";
import PrimeFactor from "../components/tools/PrimeFactor";
import ExtendendEuclid from "../components/tools/ExtendedEuclid";
import Invertibles from "../components/tools/Invertibles";
import Inverse from "../components/tools/Inverse";
import ModuloPower from "../components/tools/ModuloPower";
import Equation from "../components/tools/Equation";

const Arithmetics = () => {
	const title = "Modular Arithmetics";
	const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto autem deserunt dignissimos distinctio dolorem, enim eveniet facere laboriosam, modi, odit porro quo rem sint suscipit ullam ut voluptate voluptatum.";
	return (
		<section>
			<Intro title={title} description={description} />
			<div className={"tools"}>
				<Prime/>
				<Gcd/>
				<PrimeFactor/>
				<ExtendendEuclid/>
				<Invertibles/>
				<Inverse/>
				<ModuloPower/>
				<Equation/>
			</div>
		</section>
	)
};

export default Arithmetics;
