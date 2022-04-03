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

const reducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_ALERT:
			return {
				...state,
				showAlert: true,
				alertType: "danger",
				alertText: "Something went wrong..",
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
			// 
			case LOGIN_USER_BEGIN:
				return { ...state, isLoading: true };
			case LOGIN_USER_SUCCESS:
				return {
					...state,
					isLoading: false,
					token: action.payload.token,
					user: action.payload.user,
					userLocation: action.payload.userLocation,
					jobLocation: action.payload.location,
					showAlert: true,
					alertType: "success",
					alertText: "Login successful! Redirecting...",
				};
			case LOGIN_USER_ERROR:
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
