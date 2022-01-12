<template>
	<transition name="dropdown">
		<div class="dropdown__content" v-if="state" :style="setStyle" :class="{'no-arrow': noArrow}">
			<div class="dropdown__menu">
				<b-icon-x class="dropdown--close" v-if="showCloseX" @click.prevent="$emit('close', true)"/>
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Dropdown",
	props: {
		state: {
			type: Boolean,
			required: true,
			default: false
		},
		left: {
			type: String | Number,
			required: false,
		},
		right: {
			type: String | Number,
			required: false,
		},
		top: {
			type: String | Number,
			required: false,
			default: '65px'
		},
		bottom: {
			type: String | Number,
			required: false,
		},
		width: {
			type: String | Number,
			required: false,
		},
		noArrow: {
			type: Boolean,
			default: false
		},
		clickAnywhere: {
			type: Boolean,
			default: false
		},
		showCloseX: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		close (event) {
			if (this.clickAnywhere && !this.$parent.$el.contains(event.target)) {
				this.$emit('close', true);
			}
			if (!this.$parent.$el.parentElement.contains(event.target)) {
				this.$emit('close', true);
			}
		}
	},
	mounted () {
		document.addEventListener('click', this.close);
	},
	beforeDestroy () {
		document.removeEventListener('click',this.close);
	},
	computed: {
		setStyle() {
            return {
                top: `${this.top}${typeof this.top == 'number' ? 'px' : ''}`,
                bottom: `${this.bottom}${typeof this.bottom == 'number' ? 'px' : ''}`,
                left: `${this.left}${typeof this.left == 'number' ? 'px' : ''}`,
                right: `${this.right}${typeof this.right == 'number' ? 'px' : ''}`,
                width: `${this.width}${typeof this.width == 'number' ? 'px' : ''}`,
            };
        },
	}
};
</script>

<style lang="scss">
.dropdown__content {
	position: absolute;
	z-index: 10;
	box-shadow: 0px 2px 5px 2px rgb(0 0 0 / 15%);
    border-radius: 8px;
	&:before {
		content: "";
		display: block;
		position: absolute;
		top: -10px;
		right: 40px;
		width: 20px;
		height: 20px;
		box-shadow: 0px 2px 5px 2px rgb(0 0 0 / 15%);
		background-color: white;
		z-index: -1;
		transform: rotate(45deg);
	}
	&.no-arrow {
		&:before {
			display: none;
		}
	}
	.dropdown__menu {
		padding: 20px;
		min-width: 100px;
		background-color: white;
		border-radius: 8px;
		.dropdown--close {
			position: absolute;
			right: 5px;
			top: 5px;
			font-size: 2em;
			cursor: pointer;
		}
		.dropdown__item {
			padding: 10px 0 0;
			white-space: nowrap;
			&:first-child {
				padding-top: 0;
			}
		}
		.dropdown__divider {
			width: 100%;
			height: 1px;
			background-color: grey;
			margin: 10px 0;
		}
	}
}
.dropdown-enter-active,
.dropdown-leave-active {
	transition: all .4s cubic-bezier(.25,.8,.25,1);
}
.dropdown-enter,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
</style>