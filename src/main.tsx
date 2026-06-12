import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import GlobalError from "./components/error/Global-Error";
import Activation from "./pages/Activation";
import App from "./pages/App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
	actionActivation,
	actionLogin,
	actionRegister,
} from "./services/actions";

const router = createBrowserRouter([
	{
		index: true,
		errorElement: <GlobalError />,
		element: <Navigate to="/app" />,
	},
	{
		element: <App />,
		path: "/app",
		errorElement: <GlobalError />,
	},
	{
		element: <Register />,
		path: "/register",
		action: actionRegister,
		errorElement: <GlobalError />,
	},
	{
		element: <Login />,
		path: "/login",
		action: actionLogin,
		errorElement: <GlobalError />,
	},
	{
		element: <Activation />,
		path: "/activation",
		action: actionActivation,
		errorElement: <GlobalError />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);
