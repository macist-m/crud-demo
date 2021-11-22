<template>
	<v-data-table :headers="headers" :items="data" :search="search">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Kitaplar</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Ara"
					single-line
					hide-details
					class="shrink mr-4"
				></v-text-field>
				<crud-url />
				<add @add-an-item="getData" />
			</v-toolbar>
		</template>

		<template v-slot:item.actions="{ item }">
			<update :item="item" @update-an-item="getData" />
			<v-btn icon color="red" @click="deleteItem(item._id, data.indexOf(item))">
				<v-icon dense size="20">mdi-delete</v-icon>
			</v-btn>
		</template>
	</v-data-table>
</template>

<script>
import CrudUrl from "@/components/modals/CrudUrl";
import Add from "@/components/modals/Add";
import Update from "@/components/modals/Update";

import { get, remove } from "@/services/api";

export default {
	components: { Add, Update, CrudUrl },
	data() {
		return {
			search: "",
			headers: [
				{
					text: "Ad",
					value: "body.name"
				},
				{
					text: "Yazar",
					value: "body.author"
				},
				{
					text: "Yıl",
					value: "body.year"
				},
				{
					text: "",
					value: "actions",
					sortable: false,
					align: "right",
					width: "125px"
				}
			],
			data: []
		};
	},
	mounted() {
		this.getData();
	},
	methods: {
		async getData() {
			let data = await get("books");
			this.data = data.reverse();
		},
		async deleteItem(id, index) {
			this.data.splice(index, 1);
			await remove("books", id).then(() => this.getData());
		}
	}
};
</script>
