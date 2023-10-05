import { watch, computed, ref } from "vue";

export function useState() {
	const visibleLoginDialog = ref(false);

	function show() {
		visibleLoginDialog.value = true;
	}

	function hide() {
		visibleLoginDialog.value = false;
	}

	const visible = computed(() => visibleLoginDialog.value);

	watch(visible, () => {
		console.log("useStateChanged", visible.value);
	});

	return { visibleLoginDialog, show, hide, visible };
}
