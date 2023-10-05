import { provide, ref, Ref, inject } from "vue";
import type { InjectionKey } from "vue";

interface AppDialogState {
	visible: Ref<boolean>;
	show: () => void;
	hide: () => void;
}
export interface GlobalState {
	logInDialog: AppDialogState;
	logOutDialog?: AppDialogState;
}

export const key = Symbol() as InjectionKey<GlobalState>;
const visible = ref(false);
export function provideGlobalState() {
	provide(key, {
		logInDialog: {
			visible,
			show: () => (visible.value = true),
			hide: () => (visible.value = false),
		},
	});
}

export function useGlobalState() {
	const globalState = inject(key);
	if (!globalState) {
		throw new Error(
			"useGlobalState must be used within a component provided with the global state."
		);
	}
	return globalState;
}
