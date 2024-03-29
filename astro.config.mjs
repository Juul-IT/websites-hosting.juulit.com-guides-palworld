import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://juul-it.github.io',
	base: '/websites-hosting.juulit.com-guides-palworld',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Palworld Guide', link: '/guides/configure-palworld/' },
					],
				},
				{
					label: 'BaseCampWorkerMaxNum',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'BaseCampWorkerMaxNum', link: '/guides/basecampworkermaxnum/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
