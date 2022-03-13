import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt="logo" className="logo" />
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

const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-500);
	}
	.main-img {
		display: none;
	}
	@media (min-width:992px) {
		.page{
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img{
			display: block;
		}
	}
`;
export default Landing;
