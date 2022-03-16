import { DISPLAY_ALERT } from "./actionTypes";

const reducer = (action, state) => {
	switch (action.type) {
		case DISPLAY_ALERT:
			return { ...state, showAlert: true, alertType: "danger", alertText: "" };

		default:
			// throw new Error(`no such action: ${action.type}`);
			return state;
	}
};

export default reducer;
