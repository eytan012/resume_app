import {
	CLEAR_ALERT,
	DISPLAY_ALERT,
	REGISTER_USER_ERROR,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_BEGIN,
} from "./actionTypes";

const reducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_ALERT:
			return {
				...state,
				showAlert: true,
				alertType: "danger",
				alertText: "Some alert..",
			};
		case CLEAR_ALERT:
			return { ...state, showAlert: false, alertType: "", alertText: "" };
		case REGISTER_USER_BEGIN:
			return { ...state, isLoading: true };
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.payload.token,
				user: action.payload.user,
				userLocation: action.payload.userLocation,
				jobLocation: action.payload.location,
				showAlert: true,
				alertType: "success",
				alertText: "User Created! Redirecting...",
			};
		case REGISTER_USER_ERROR:
			return {
				...state,
				isLoading: false,
				showAlert: true,
				alertType: "danger",
				alertText: action?.payload?.msg,
			};
		default:
			// throw new Error(`no such action: ${action.type}`);
			return state;
	}
};

export default reducer;
