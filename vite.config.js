import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapters for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			adapter: adapter()
		})
	]
});
