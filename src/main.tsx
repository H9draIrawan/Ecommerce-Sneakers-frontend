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
import { actionLogin, actionRegister } from "./services/actions";
import Activation from "./pages/Activation";

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
		action : actionLogin,
		errorElement: <GlobalError />,
	},
	{
		element : <Activation />,
		path: "/activation",
		errorElement: <GlobalError />,
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>,
);
