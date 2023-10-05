<script setup lang="ts">
	import { reactive } from "vue";
	export interface SearchVehicleDto {
		location: string;
		pickupDate: string;
		returnDate: string;
	}
	const emits = defineEmits<{ (e: "search", form: SearchVehicleDto): void }>();
	const form = reactive<SearchVehicleDto>({
		location: "",
		pickupDate: "",
		returnDate: "",
	});
	function handleSearch() {
		emits("search", form);
	}
</script>
<template>
	<el-form
		:inline="true"
		label-position="top"
		:model="form"
		size="large"
		class="search-form-wrapper">
		<el-form-item label="Your location">
			<el-select
				v-model="form.location"
				placeholder="Choose a location"
				:fit-input-width="true"
				clearable>
				<el-option
					label="Zone one"
					value="shanghai" />
				<el-option
					label="Zone two"
					value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Pickup date">
			<el-date-picker
				v-model="form.pickupDate"
				type="date"
				placeholder="Pick a date"
				clearable />
		</el-form-item>
		<el-form-item label="Return date">
			<el-date-picker
				v-model="form.returnDate"
				type="date"
				placeholder="Pick a date"
				clearable />
		</el-form-item>
		<el-form-item>
			<el-button
				:style="{ width: '100%' }"
				type="primary"
				native-type="submit"
				@click="handleSearch"
				>Search</el-button
			>
		</el-form-item>
	</el-form>
</template>
<style lang="scss">
	.search-form-wrapper {
		border-radius: var(--el-border-radius-round);
		padding: 20px 15px;
		background-color: white;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
		.el-input {
			--el-input-width: 160px;
			--el-date-editor-width: 160px;
		}
		&.el-form--inline .el-form-item {
			margin-right: 20px;
			&:last-child {
				margin-right: 0px;
				margin-bottom: 0px;
				align-self: center;
				flex-grow: 1;
			}
		}
		&.el-form--label-top .el-form-item .el-form-item__label {
			margin-bottom: 5px;
		}
	}
</style>
