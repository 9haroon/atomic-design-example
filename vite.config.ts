import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [
				IconsResolver({ prefix: "Icon" }),
				ElementPlusResolver({
					importStyle: "sass",
				}),
			],
		}),
		Components({
			resolvers: [IconsResolver(), ElementPlusResolver()],
		}),
		Icons({
			autoInstall: true,
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: `@use "${pathSrc}/styles/element-plus/index.scss" as *;`,
			},
		},
	},
});
