<script setup lang="ts">
	import { dialogProps, dialogEmits } from "element-plus";
	import { computed } from "vue";
	const props = defineProps(dialogProps);
	const emits = defineEmits(dialogEmits);
	const visible = computed({
		get() {
			return props.modelValue;
		},
		set(val: boolean) {
			emits("update:modelValue", val);
		},
	});
</script>
<template>
	<el-dialog
		v-model="visible"
		width="30%"
		align-center>
		<template
			v-if="$slots.header"
			#header>
			<slot name="header" />
		</template>
		<slot />
		<template
			v-if="$slots.footer"
			#footer>
			<slot name="footer" />
		</template>
	</el-dialog>
</template>
<style lang="scss">
	.el-dialog {
		--el-dialog-border-radius: 20px;
	}
</style>
