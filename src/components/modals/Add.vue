<template>
	<modal icon="mdi-plus-circle" title="Kitap Ekle" :toogleDialog="dialog">
		<v-card-text>
			<!-- Form -->
			<v-form v-model="valid" ref="form" :lazy-validation="true">
				<v-row dense>
					<v-col cols="12">
						<v-text-field
							label="Kitap Adı"
							v-model="formData.name"
							:rules="rules.required"
						></v-text-field>
					</v-col>
					<v-col cols="12">
						<v-text-field
							label="Çıkış Yılı"
							v-model="formData.year"
							:rules="rules.onlyYear"
							type="number"
						></v-text-field>
					</v-col>
					<v-col cols="12">
						<v-text-field
							label="Yazar Adı"
							v-model="formData.author"
							:rules="rules.required"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn color="primary" @click="submit">Ekle</v-btn>
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
import { post } from "@/services/api";

export default {
	components: { modal: Modal },

	data() {
		return {
			dialog: false,
			valid: false,
			rules: validationRules,
			formData: {
				name: "",
				year: "",
				author: ""
			}
		};
	},
	methods: {
		async submit() {
			let validation = this.$refs.form.validate();

			if (validation) {
				await post("books", this.formData).then((response) => {
					this.$emit("add-an-item", response.body);
					this.dialog = !this.dialog;
					this.$refs.form.reset();
				});
			}
		}
	}
};
</script>
