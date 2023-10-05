<script lang="ts" setup>
	import { useRouter } from "vue-router";
	import FormSearchVehicle, {
		SearchVehicleDto,
	} from "../components/FormSearchVehicle.vue";
	import { useGlobalState } from "../composables/globalState";
	import { useUserStore } from "../stores/useUser";

	const router = useRouter();
	const userStore = useUserStore();
	const { logInDialog } = useGlobalState();
	const { show } = logInDialog;
	const { VITE_APP_TITLE } = import.meta.env;

	function handleSearch(value: SearchVehicleDto) {
		if (!userStore.authenticated) {
			show();
			return;
		}
		console.log("value", value);
		router.push({ name: "dashboard" });
	}
</script>
<template>
	<el-row>
		<el-col
			:md="12"
			:xs="24">
			<h1
				:style="{
					fontSize: 'var(--el-font-size-extra-large)',
					paddingTop: '50px',
				}">
				Looking to save more on your rental car?
			</h1>
			<h4>Discover {{ VITE_APP_TITLE }}, electric-car rental in USA</h4>
			<FormSearchVehicle @search="handleSearch" />
		</el-col>
		<el-col
			class="tire-track-wrapper"
			:md="12"
			:xs="24">
			<div :style="{ paddingTop: '50px' }">
				<img
					alt="pickup-truck"
					:style="{ maxWidth: '100%' }"
					width="768"
					src="/Pickup_Truck_future_electric_concept_car.png" />
			</div>
		</el-col>
	</el-row>
</template>

<style lang="scss">
	.tire-track-wrapper {
		background-image: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="%23BAE6FF" d="M60.2,-48.1C75.7,-28.5,84.4,-3.6,79.8,18.8C75.2,41.3,57.2,61.4,36.6,68.4C16.1,75.3,-7.1,69.1,-27.1,58.6C-47.1,48.1,-63.9,33.3,-67.1,16.2C-70.3,-0.8,-59.9,-20.1,-46.4,-39.2C-32.9,-58.3,-16.5,-77.3,2.9,-79.6C22.3,-81.9,44.7,-67.7,60.2,-48.1Z" transform="translate(100 100)" /></svg>');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>
