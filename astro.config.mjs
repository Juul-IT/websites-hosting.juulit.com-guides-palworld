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
						{ label: 'How To Move A Save From Local To A Dedicated Server' , link: '/guides/move-a-save-frrom-local-to-a-dedicated-server/' },
						{ label: 'How To Move A Save From One Dedicated Server To Another' , link: '/guides/move-a-save-from-one-dedicated-server-to-another/' },
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
