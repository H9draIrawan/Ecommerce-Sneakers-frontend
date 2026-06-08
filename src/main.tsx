import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import GlobalError from "./components/error/Global-Error";
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { actionRegister } from "./services/actions";

const router = createBrowserRouter([
	{
		index: true,
		errorElement: <GlobalError />,
		element: <Navigate to="/app" />,
	},
	{
		element: <App />,
		path: "/app",
	},
	{
		element: <Register />,
		path: "/register",
		action: actionRegister,
	},
	{
		element: <Login />,
		path: "/login",
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);
