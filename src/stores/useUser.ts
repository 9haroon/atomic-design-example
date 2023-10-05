import { defineStore } from "pinia";
import { computed, ref, Ref } from "vue";

interface User {
	username: string;
	firstName: string;
	lastName: string;
}
const APP_AUTH_KEY = "appAuthentication";
export const useUserStore = defineStore("user", () => {
	const login = (username: string, password: string) => {
		if ("tester" !== username || "testerpass" !== password) {
			return Promise.reject(new Error("Authentication failed"));
		}
		user.value = {
			username: "tester",
			firstName: "FirstName",
			lastName: "LastName",
		};
		localStorage.setItem(APP_AUTH_KEY, JSON.stringify(user.value));
		return new Promise<boolean>((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 2000);
		});
	};

	const logout = () => {
		return new Promise<boolean>((resolve) => {
			setTimeout(() => {
				user.value = null;
				localStorage.removeItem(APP_AUTH_KEY);
				resolve(true);
			}, 2000);
		});
	};

	const getCurrentUser = () => {
		const item = localStorage.getItem(APP_AUTH_KEY);
		return item ? (JSON.parse(item) as User) : null;
	};

	const user: Ref<User | null> = ref(getCurrentUser());
	const authenticated = computed(() => Boolean(user.value));

	return { user, login, logout, authenticated };
});
