import React from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actionTypes";
import reducer from "./reducer";

export const initialState = {
	isLoading: false,
	showAlert: false,
	alertType: "",
	alertText: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const displayAlert = () => dispatch({ type: DISPLAY_ALERT }, clearAlert());
	const clearAlert = () =>
		setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3500);
	return (
		<AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
			{children}
		</AppContext.Provider>
	);
};

// custom hook to use the context
export const useAppContext = () => {
	return React.useContext(AppContext);
};

export { AppProvider };
