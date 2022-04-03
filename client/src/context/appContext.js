import React from "react";
import axios from "axios";
import {
	CLEAR_ALERT,
	DISPLAY_ALERT,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_BEGIN,
	LOGIN_USER_BEGIN,
	LOGIN_USER_ERROR,
	LOGIN_USER_SUCCESS,
} from "./actionTypes";
import reducer from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

export const initialState = {
	isLoading: false,
	showAlert: false,
	alertType: "",
	alertText: "",
	user: user ? JSON.parse(user) : null,
	token: token || null,
	userLocation: userLocation || null,
	jobLocation: userLocation || null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const displayAlert = () => dispatch({ type: DISPLAY_ALERT }, clearAlert());
	const clearAlert = () =>
		setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3500);

	const addUserToLocalStorage = ({ user, token, location }) => {
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
		localStorage.setItem("location", location);
	};
	const removeUserFromLocalStorage = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		localStorage.removeItem("location");
	};
	const registerUser = async (currentUser) => {
		dispatch({ type: REGISTER_USER_BEGIN });
		try {
			const { data } = await axios.post("/api/v1/auth/register", currentUser);
			console.log(data);
			const { user, token, location } = data;
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: { user, token, location },
			});
			// set local storage
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			console.log(error.response);
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error?.response?.data?.msg },
			});
		} finally {
			clearAlert();
		}
	};

	const loginUser = async (currentUser) => {
		dispatch({ type: LOGIN_USER_BEGIN });
		try {
			const { data } = await axios.post("/api/v1/auth/login", currentUser);
			const { user, token, location } = data;
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { user, token, location },
			});
			// set local storage
			addUserToLocalStorage({ user, token, location });
		} catch (error) {
			console.log(error.response);
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error?.response?.data?.msg },
			});
		} finally {
			clearAlert();
		}
	};


	const logout = async () => {
		try {
			removeUserFromLocalStorage();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AppContext.Provider
			value={{ ...state, displayAlert, clearAlert, registerUser, loginUser, logout }}
		>
			{children}
		</AppContext.Provider>
	);
};

// custom hook to use the context
export const useAppContext = () => {
	return React.useContext(AppContext);
};

export { AppProvider };
