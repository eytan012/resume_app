import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register } from "./pages";
import {
	AddJob,
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
	ProtectedRoute,
} from "./pages/dashboard";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index path="stats" element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-job" element={<AddJob />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="/landing" element={<Landing />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
