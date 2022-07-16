import $auth from "./axios";

export const authApi = {
	registration: (data) => $auth.post("/auth/email/register", data),
	login: (data) => $auth.post("/auth/email/login", data),
	getProfile: () => $auth.get("/auth/me"),
};
