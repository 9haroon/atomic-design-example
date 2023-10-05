import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import UnAuthenticateLayout from "./components/layouts/UnAuthenticateLayout.vue";
import AuthenticatedLayout from "./components/layouts/AuthenticatedLayout.vue";
import { useUserStore } from "./stores/useUser";

const publicPages: RouteRecordRaw[] = [
	{ path: "", name: "home", component: () => import("./pages/HomePage.vue") },
];

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: UnAuthenticateLayout,
		children: publicPages,
	},
	{
		path: "/profile",
		component: AuthenticatedLayout,
		children: [
			{
				path: "",
				name: "dashboard",
				component: () => import("./pages/DashboardPage.vue"),
			},
			{
				path: "edit",
				name: "editProfile",
				component: () => import("./pages/ProfilePage.vue"),
			},
		],
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to) => {
	const userStore = useUserStore();
	const canAccess = userStore.authenticated;
	if (!canAccess && to.name !== "home") return { name: "home" };
});
