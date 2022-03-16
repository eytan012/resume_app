import React from "react";
export const initialState = {
	isLoading: false,
	showAlert: false,
	alertType: "",
	alertText: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, setState] = React.useState(initialState);
	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return React.useContext(AppContext);
};

export { AppProvider };
