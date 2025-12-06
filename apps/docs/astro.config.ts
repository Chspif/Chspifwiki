import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://starlight.catppuccin.com",
	integrations: [
		starlight({
			title: "Chspif Wiki",
			logo: {
				src: "./src/assets/catppuccin.png",
				alt: "Catppuccin logo",
			},
			favicon: "/favicon.png",
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
			customCss: [
				"@fontsource/inter/400.css",
				"@fontsource/inter/600.css",
				"./src/custom.css",
			],
			sidebar: [
				{
					label: "规则",
					items: [
						{ label: "关于交流", slug: "rules/server-rules" },
						{ label: "关于游戏内", slug: "rules/ingame" },
						{ label: "关于活跃度", slug: "rules/time" },
					],
				},
				{
					label: "服务器内功能",
					items: [
						{ label: "服务器指令", slug: "features/server-commands" },
						{ label: "服务器特殊内容", slug: "features/server-recipes" },
					],
				},
				{
					label: "其他",
					items: [
						{ label: "配置", slug: "other/config" },
						{ label: "开源", slug: "other/open-source" },
						{ label: "Q&A", slug: "other/qa" },
					],
				},

			],
			plugins: [catppuccin()],
		}),
	],
});
