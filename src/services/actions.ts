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

async function actionLogin({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");

	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/auth/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		},
	);
	const data = await response.json();
	if (!response.ok) {
		if (response.status === 403) {
			await fetch(
				`${import.meta.env.VITE_API_URL}/api/auth/resend-activation`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				},
			);
			redirect("/activation?email=" + email);
		}
		return {
			error: data.message,
		};
	}

	return redirect("/app");
}

async function actionActivation({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	console.log(formData);
	const otp = formData.get("otp");

	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/auth/activation`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ otp }),
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

export { actionActivation, actionLogin, actionRegister };
