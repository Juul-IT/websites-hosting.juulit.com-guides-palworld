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
						{ label: 'Palworld Guide' , link: '/guides/configure-palworld/' },
						{ label: 'How To Increase BaseCampWorkerMaxNum for More Camp Workers in Palworld' , link: '/guides/basecampworkermaxnum/' },
						{ label: 'How To Move A Save From Local To A Dedicated Server' , link: '/guides/local-to-dedicated-server' },
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
