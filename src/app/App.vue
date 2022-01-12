<template>
	<div id="app">
		<Navigation />
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import Navigation from '@/app/components/Navigation.vue';
export default {
	name: 'App',
	components: { Navigation }
};
</script>