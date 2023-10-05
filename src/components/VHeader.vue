<script setup lang="ts">
	import { useUserStore } from "../stores/useUser";
	import VButton from "./VButton.vue";
	import VDialog from "./VDialog.vue";
	import { ref, watch, computed } from "vue";
	import FormLogin from "./FormLogin.vue";
	import { Avatar, SwitchButton } from "@element-plus/icons-vue";
	import { useRouter } from "vue-router";
	import { useGlobalState } from "../composables/globalState";
	const { VITE_APP_TITLE } = import.meta.env;
	const userStore = useUserStore();

	const { logInDialog } = useGlobalState();
	const { show, visible: visibleLoginDialog } = logInDialog;
	const router = useRouter();
	const visibleLogoutDialog = ref(false),
		logoutLoading = ref(false);

	const fullName = computed(() => {
		const user = userStore.user;
		return user ? `${user.firstName} ${user.lastName}` : "";
	});

	function handleSignUpClicked() {
		alert("Not implement yet");
	}

	function handleSignInClicked() {
		show();
	}

	function handleCommand(command: string | number | object) {
		switch (command) {
			case "logOut":
				visibleLogoutDialog.value = true;
				break;
			case "profile":
				router.push({ name: "profile" });
				break;
			default:
				break;
		}
	}
	function handleLogOut() {
		logoutLoading.value = true;
		userStore
			.logout()
			.then(() => (visibleLogoutDialog.value = false))
			.finally(() => {
				logoutLoading.value = false;
				router.replace({ name: "home" });
			});
	}
	watch(
		() => userStore.authenticated,
		(v) => {
			console.log("authenticated", v);
		},
		{ immediate: true }
	);
</script>
<template>
	<el-header height="64px">
		<el-row
			align="middle"
			style="height: 100%">
			<el-col :sm="12">
				<router-link
					to="/"
					:style="{ textDecoration: 'none' }">
					<el-row align="middle">
						<el-avatar src="https://picsum.photos/200/200" />&nbsp;
						<span style="font-size: var(--el-font-size-large)">{{
							VITE_APP_TITLE
						}}</span>
					</el-row>
				</router-link>
			</el-col>
			<el-col :sm="12">
				<el-row
					align="middle"
					justify="end">
					<template v-if="!userStore.authenticated">
						<VButton
							text
							@click="handleSignUpClicked">
							Sign Up
						</VButton>
						<el-button
							type="primary"
							@click="handleSignInClicked"
							>Sign In</el-button
						>
					</template>
					<template v-else>
						<el-dropdown
							placement="bottom-end"
							:width="200"
							trigger="hover"
							@command="handleCommand">
							<el-avatar>T</el-avatar>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item
										:icon="Avatar"
										command="profile">
										{{ fullName }}
									</el-dropdown-item>
									<el-dropdown-item
										:icon="SwitchButton"
										command="logOut">
										Log Out
									</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</template>
				</el-row>
			</el-col>
		</el-row>
		<VDialog v-model="visibleLoginDialog">
			<template #header> Login </template>
			<FormLogin @success="(v) => (visibleLoginDialog = !v)" />
		</VDialog>
		<VDialog v-model="visibleLogoutDialog">
			<template #header> Logout </template>
			<span>Are you sure to log out?</span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="visibleLogoutDialog = false">Cancel</el-button>
					<el-button
						:loading="logoutLoading"
						type="primary"
						@click="handleLogOut">
						Confirm
					</el-button>
				</span>
			</template>
		</VDialog>
	</el-header>
</template>
../stores/useUser
