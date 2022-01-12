<template>
	<div class="locale-switcher">
		<div class="locale-context__wrapper" @click="onClick()">
			<span>{{ $t('labels.language') }}:</span>
			<span class="locale">[ {{ currentLang }} ]</span>
			<ArrowIndicator :state="state" />
		</div>
		<Dropdown :state="state" @close="onClose()" :right="0">
			<div
				class="dropdown__item"
				v-for="(lang, i) in listLang"
				:class="{ active: lang === currentLang }"
				:key="`ky-${i}`"
				@click="onChangeLocale(lang)"
				v-t="'languages.' + lang" />
		</Dropdown>
	</div>
</template>
<script>
import ArrowIndicator from '@/app/components/ArrowIndicator.vue';
import Dropdown from '@/app/components/Dropdown.vue';
import {
	loadLanguageAsync,
	languagesAvailable,
	navigatorCloseLanguage,
} from '@/i18n';

export default {
	name: 'LocaleSwitcher',
	props: {
		state: {
			Type: Boolean,
			required: true,
		},
	},
	components: { ArrowIndicator, Dropdown },
	data() {
		return {
			listLang: languagesAvailable,
		};
	},
	created: function () {
		navigatorCloseLanguage();
	},
	methods: {
		onClick() {
			this.$emit('change', !this.state);
		},
		onClose() {
			this.$emit('change', false);
		},
		onChangeLocale(value) {
			loadLanguageAsync(value);
			this.$emit('change', false);
		},
	},
	computed: {
		currentLang() {
			return this.$i18n.locale;
		},
	},
};
</script>

<style lang="scss" scoped>
.locale-switcher {
	position: relative;
	margin-left: auto;
	.locale-context__wrapper {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		span {
			margin-right: 10px;
		}
		.locale {
			align-items: center;
			justify-content: center;
			display: flex;
			margin: 0 4px 0 4px;
		}
	}
	.dropdown__menu {
		min-width: 0;
		.dropdown__item {
			cursor: pointer;
			&.active {
				color: purple;
			}
		}
	}
}
</style>