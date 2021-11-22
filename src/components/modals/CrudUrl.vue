<template>
	<modal icon="mdi-database" title="rudcrud.com api adresi" :toogleDialog="dialog">
		<v-card-text>
			<!-- Form -->
			<v-form v-model="valid" ref="form" :lazy-validation="true">
				<v-row dense>
					<v-col cols="12">
						<v-text-field
							label="crudcrud.com api adresi"
							v-model="crud_url"
							:rules="rules.url"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn color="primary" @click="submit">Kaydet</v-btn>
					</v-col>
				</v-row>
			</v-form>
			<!-- / -->
		</v-card-text>
	</modal>
</template>

<script>
import Modal from "@/components/templates/Modal";
import validationRules from "@/plugins/validation.rules";

export default {
	components: { Modal },

	data() {
		return {
			dialog: false,
			valid: false,
			rules: validationRules,
			crud_url: this.$cookies.isKey("crud_url") ? this.$cookies.get("crud_url") : ""
		};
	},
	methods: {
		async submit() {
			let validation = this.$refs.form.validate();

			if (validation) {
				this.dialog = !this.dialog;
				this.$cookies.set("crud_url", this.crud_url);
			}
		}
	}
};
</script>
