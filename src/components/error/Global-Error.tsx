"use client";

import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
} from "react-router-dom";

function GlobalError() {
	const error = useRouteError();
	const navigate = useNavigate();

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.data}</i>
				</p>
				<button onClick={() => navigate(-1)}>Go Back</button>
			</div>
		);
	}
	return <h1>Unknown error</h1>;
}

export default GlobalError;
