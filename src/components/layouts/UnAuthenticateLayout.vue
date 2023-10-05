<script setup lang="ts">
	import { CSSProperties } from "vue";
	import VHeader from "../VHeader.vue";
	import VFooter from "../VFooter.vue";

	const contentStyle: CSSProperties = {
		// textAlign: "center",
		minHeight: "calc(100svh - 134px)",
		// lineHeight: "120px",
		// color: "#fff",
		// backgroundColor: "#108ee9",
	};
</script>
<template>
	<el-container direction="vertical">
		<VHeader />
		<el-main :style="contentStyle">
			<router-view></router-view>
		</el-main>
		<VFooter />
	</el-container>
</template>
