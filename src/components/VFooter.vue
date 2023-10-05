<script setup lang="ts">
	import { AwesomeSocialButton } from "awesome-social-button";
	import VCopyright from "./VCopyright.vue";
	const { VITE_APP_TITLE } = import.meta.env;
</script>
<template>
	<el-footer
		height="64"
		:style="{
			color: '#fff',
			backgroundColor: '#7dbcea',
		}">
		<el-row
			align="middle"
			style="height: 100%; padding: 15px 0">
			<el-col
				:xs="24"
				:md="8">
				<el-row align="middle">
					<span style="font-size: var(--el-font-size-large)">
						{{ VITE_APP_TITLE }}
					</span>
				</el-row>
			</el-col>
			<el-col
				:xs="24"
				:md="8"
				:style="{ textAlign: 'center' }">
				<VCopyright />
			</el-col>
			<el-col
				:xs="24"
				:md="8">
				<el-row
					align="middle"
					justify="end">
					<AwesomeSocialButton
						type="twitter"
						shape="circle"
						:link="{
							href: 'https://twitter.com/9haroon_dev',
							target: '_blank',
						}" />
				</el-row>
			</el-col>
		</el-row>
	</el-footer>
</template>
