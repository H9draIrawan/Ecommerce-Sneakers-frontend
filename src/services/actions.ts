import { redirect, type ActionFunctionArgs } from "react-router-dom";

async function actionRegister({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const fname = formData.get("fname");
	const lname = formData.get("lname");
	const email = formData.get("email");
	const username = formData.get("username");
	const password = formData.get("password");
	const fullname = fname + " " + lname;

	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/auth/register`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ fullname, username, email, password }),
		},
	);
	const data = await response.json();
	if (!response.ok) {
		return {
			error: data.message,
		};
	}

	return redirect("/login");
}

export { actionRegister };
