import axios from "axios";
import Cookies from "js-cookie";

export const $auth = axios.create({
	baseURL: "https://nestjs-boilerplate-test.herokuapp.com/api/v1",
});

export const $users = axios.create({
	baseURL: "https://randomuser.me/api",
});

$auth.interceptors.request.use((config) => {
	const authToken = Cookies.get("auth-token");

	if (authToken) {
		config.headers.authorization = `Bearer ${authToken}`;
	}

	return config;
});

export default $auth;
