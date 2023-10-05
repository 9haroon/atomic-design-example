<template>
	<el-button v-bind="props"><slot>VButton</slot></el-button>
</template>
<script lang="ts" setup>
	import { buttonProps } from "element-plus";
	const props = defineProps(buttonProps);
</script>
