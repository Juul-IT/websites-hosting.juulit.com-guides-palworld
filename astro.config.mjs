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
						{ label: 'How To Move A Save From Local To A Dedicated Server' , link: '/guides/move-a-save-from-local-to-a-dedicated-server/' },
						{ label: 'How To Move A Save From One Dedicated Server To Another' , link: '/guides/move-a-save-from-one-dedicated-server-to-another/' },
						{ label: 'Finding Hosting Providers' , link: '/guides/finding-hosting-providers/' },
						{ label: 'Setting a Palworld Server to 120 Tick Rate/FPS' , link: '/guides/setting-a-palworld-server-to-120-tick-rate-fps/' },
						{ label: 'Activating PVP in Palworld' , link: '/guides/activating-pvp-in-palworld/' },
						{ label: 'Making Your Palworld Server Visible on the Community List' , link: '/guides/making-your-palworld-server-visible-on-the-community-list/' },
						{ label: 'Adding a Server Password in Palworld' , link: '/guides/add-a-server-password/' },
					],
				},
				{
					label: 'Sever Configuration',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Changing the Map Size on a Palworld Server' , link: '/guides/changing-map-size/' },
						{ label: 'Enabling Mods on a Palworld Server' , link: '/guides/enabling-mods/' },
						{ label: ' Setting Up Automatic Server Backups for a Palworld Server' , link: '/guides/setting-up-automatic-backups/' },
						{ label: 'Changing the Server\'s Difficulty Settings in Palworld' , link: '/guides/changing-server-difficulty/' },
						{ label: 'Recommended Server Specs for Hosting a Palworld Server' , link: '/guides/recommended-server-specs-for-hosting/' },
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
