import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://starlight.catppuccin.com",
	integrations: [
		starlight({
			title: "资料导航",
			favicon: "/favicon.png",
			customCss: ['./src/custom.css', '@fontsource/inter'],
			social: [
				{
					label: "GitHub",
					icon: "github",
					href: "https://github.com/Chspif",
				},
			],
			expressiveCode: {
				themes: ["catppuccin-mocha", "catppuccin-latte"],
				styleOverrides: {
					textMarkers: {
						insBackground:
							"color-mix(in oklab, var(--sl-color-green-high) 25%, var(--sl-color-gray-6));",
						insBorderColor: "var(--sl-color-gray-5)",
						delBackground:
							"color-mix(in oklab, var(--sl-color-red-high) 25%, var(--sl-color-gray-6));",
						delBorderColor: "var(--sl-color-gray-5)",
					},
					codeBackground: "var(--sl-color-gray-6)",
				},
			},
			
			sidebar: [
				{
					label: "规则",
					items: [
						{ label: "关于交流", slug: "rules/communication" },
						{ label: "关于游戏内", slug: "rules/ingame" },
						{ label: "关于活跃度", slug: "rules/time" },
						{ label: "关于违规行为", slug: "rules/violations" },
					],
				},
				{
					label: "进入服务器",
					items: [
						{ label: "准备工作", slug: "enter/prepare" },
						{ label: "白名单绑定", slug: "enter/whitelist" },
						{ label: "进入服务器", slug: "enter/enter" },
					],
				},
				{
					label: "服务器内功能",
					items: [
						{ label: "服务器特殊内容", slug: "features/server-recipes" },
						{ label: "服务器指令", slug: "features/server-commands" },

					],
				},
				{
					label: "其他",
					items: [
						{ label: "关于服务器定位", slug: "shared-server/whatisshengdian" },
						{ label: "共享服务器注意事项", slug: "shared-server/precautions" },
					],
				},

			],
			plugins: [catppuccin()],
		}),
	],
});
