import { $users } from "./axios";

export const usersApi = {
	getAll: (amount, page) =>
		$users.get(`/?results=${amount}&page=${page}&nat=us,gb&seed=abc`),
};
