<script setup lang="ts">
	import { reactive, ref } from "vue";
	import type { FormInstance, FormRules } from "element-plus";
	import { useUserStore } from "../stores/useUser";

	interface LoginForm {
		username: string;
		password: string;
	}
	const emits = defineEmits<{ (e: "success", val: boolean): void }>();
	const { login } = useUserStore();
	const formRef = ref<FormInstance>();
	const form = reactive<LoginForm>({
		username: "tester",
		password: "",
	});
	const rules = reactive<FormRules<LoginForm>>({
		username: [{ required: true, message: "Plese input tester" }],
		password: [{ required: true, message: "Plese input testerpass" }],
	});

	const loading = ref(false);
	const error = ref<string | null>(null);
	const submitForm = (formEl: FormInstance | undefined) => {
		error.value = "";
		if (!formEl) return;
		formEl.validate((valid) => {
			if (!valid) {
				return;
			}
			loading.value = true;
			const { username, password } = form;
			console.log("submit!", form);
			login(username, password)
				.then((res) => {
					console.log("res", res);
					emits("success", true);
				})
				.catch((err) => {
					error.value = err.message;
				})
				.finally(() => (loading.value = false));
		});
	};
</script>
<template>
	<el-form
		v-loading="loading"
		label-position="top"
		size="large"
		ref="formRef"
		:model="form"
		:rules="rules"
		@submit.prevent="submitForm(formRef)">
		<el-alert
			v-if="error"
			:title="error"
			type="error"
			center
			show-icon
			@close="error = null" />
		<el-form-item
			label="Username"
			prop="username">
			<el-input
				placeholder="tester"
				v-model="form.username" />
		</el-form-item>
		<el-form-item
			label="Password"
			prop="password">
			<el-input
				v-model="form.password"
				placeholder="testerpass"
				type="password"
				show-password />
		</el-form-item>
		<el-form-item>
			<el-button
				type="primary"
				native-type="submit">
				Submit
			</el-button>
		</el-form-item>
	</el-form>
</template>
