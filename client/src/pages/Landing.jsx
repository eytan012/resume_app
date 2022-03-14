import {Logo} from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						Resume <span>tracker</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Consectetur magni omnis, blanditiis id molestias quaerat eum
						dolorem. Ipsam expedita veniam, nobis molestias, deleniti quisquam
						aut ipsum dolore nesciunt fugit fuga? Mollitia libero incidunt
						distinctio aperiam odio pariatur nostrum totam, laudantium autem,
						recusandae, accusantium illo. Vero, repudiandae. Animi voluptas
						deleniti nulla voluptates distinctio numquam molestias quos,
						suscipit ab fuga recusandae dolorem!
					</p>
					<button className="btn btn-hero">Login / Register</button>
				</div>
				<img src={main} alt="job" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
