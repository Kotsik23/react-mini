import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { authApi } from "../api/auth";

export const AuthContext = createContext({
	isLoaded: false,
	user: null,
	token: null,
	setUser: () => {},
	setToken: () => {},
	signOut: () => {},
});

export const AuthProvider = ({ children }) => {
	const [isLoaded, setIsLoaded] = useState(true);
	const [user, setUser] = useState(null);
	const [token, setTokenData] = useState(null);

	const setToken = useCallback((tokenData) => {
		setTokenData(tokenData);

		if (tokenData) {
			Cookies.set("auth-token", tokenData);
		} else {
			Cookies.remove("auth-token");
		}
	}, []);

	const loadData = useCallback(async () => {
		const tokenData = Cookies.get("auth-token");
		setTokenData(tokenData);

		try {
			if (tokenData) {
				const { data } = await authApi.getProfile();
				setUser(data);
			}
		} catch {
			setToken(null);
		} finally {
			setIsLoaded(false);
		}
	}, [setToken]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const signOut = useCallback(() => {
		setUser(null);
		setToken(null);
	}, [setToken]);

	const contextValue = useMemo(
		() => ({
			isLoaded,
			user,
			token,
			setUser,
			setToken,
			signOut,
		}),
		[isLoaded, user, token, setToken, signOut]
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
