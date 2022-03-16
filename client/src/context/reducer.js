import { CLEAR_ALERT, DISPLAY_ALERT } from "./actionTypes";

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
		default:
			// throw new Error(`no such action: ${action.type}`);
			return state;
	}
};

export default reducer;
