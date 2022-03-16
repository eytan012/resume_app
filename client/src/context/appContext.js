import React from "react";
import { DISPLAY_ALERT } from "./actionTypes";
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
	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
	};
	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

// custom hook to use the context
export const useAppContext = () => {
	return React.useContext(AppContext);
};

export { AppProvider };
