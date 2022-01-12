<template>
	<div class="navigation">
		<div class="navigation--links">
			<router-link to="/" v-t="'navigations.home'" /> |
			<router-link to="/about" v-t="'navigations.about'" />
		</div>
		<LocaleSwitcher @change="onLangMenu" :state="langMenuOpen" />
	</div>
</template>

<script>
import LocaleSwitcher from '@/app/components/LocaleSwitcher.vue';

export default {
	name: 'Navigation',
	components: { LocaleSwitcher },
	data() {
		return {
			langMenuOpen: false
		};
	},
	methods: {
		onLangMenu(state) {
			this.langMenuOpen = state;
		}
	}
};
</script>

<style lang="scss">
.navigation {
	width: 100vw;
	border-bottom: solid 4px purple;
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>
