import '../css/components/Header.css';
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className={"logo"}>
				<Link to="/">CRYPTOTOOLS</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/arithmetics">ARITHMETICS</Link>
					</li>
					<li>
						<Link to="/fundamentals">FUNDAMENTALS</Link>
					</li>
					<li>
						<Link to="/rsa">RSA</Link>
					</li>
					<li>
						<Link to="/group-theory">GROUP THEORY</Link>
					</li>
					<li>
						<Link to="/elliptic-curves">ELLIPTIC CURVES</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
