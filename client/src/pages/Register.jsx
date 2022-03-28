import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";


const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const Register = () => {
	const [values, setValues] = useState(initialState);
	const { showAlert, displayAlert, registerUser,  user } =
		useAppContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (user) navigate('/')
	}, [user, navigate]);

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert();
			return;
		}
		const currentUser = { name, email, password };
		if (isMember) return console.log("Alreadey a user");
		registerUser(currentUser);
	};
	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{showAlert && <Alert />}
				{!values.isMember && (
					<FormRow
						type={"text"}
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button type="submit" className="btn btn-block">
					Submit
				</button>
				<p>
					{values.isMember ? "Not a member yet?" : "Already a member?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};
export default Register;
