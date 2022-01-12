<template>
	<div class="arrow" :class="[theme, state ? 'open' : '']"></div>
</template>

<script>
export default {
	name: "ArrowIndicator",
	props: {
			state: {
			Type: Boolean,
			required: true
		},
			theme: {
			Type: String,
			required: false,
			default: 'default'
		}
	}
};
</script>
<style lang="scss" scoped>
.arrow {
	position: relative;
	margin: 0 23px 0 10px;
	height: 32px;
	display: flex;
	width: 10px;
	&:before {
		content: "";
		position: absolute;
		width: 10px;
		height: 6px;
		top: 50%;
		margin-top: -3px;
		background-image: url(/assets/svg/arrow-down.svg);
		background-repeat: no-repeat;
		background-position: center center;
		transition: transform 0.3s ease-in-out;
	}
	&.open {
		&:before {
			transform: rotate(180deg);
		}
	}
	&.light {
		&:before {
			background-image: url(/assets/svg/arrow-down-white.svg);
		}
	}
}
</style>