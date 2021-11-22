<template>
	<v-dialog v-model="dialog" width="600" overlay-color="primary" overlay-opacity="0.1">
		<template v-slot:activator="{ on }">
			<v-btn icon :color="color" v-on="on">
				<v-icon dense>{{ icon }}</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title class="title">{{ title }}</v-card-title>
			<slot></slot>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: "primary"
		},
		icon: {
			type: String,
			required: true
		},
		toogleDialog: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	data() {
		return {
			dialog: false
		};
	},
	watch: {
		dialog: function (state) {
			this.$emit("opened", state);
		},
		toogleDialog: function () {
			this.dialog = !this.dialog;
		}
	}
};
</script>
