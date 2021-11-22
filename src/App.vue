<template>
	<v-app id="demo">
		<v-navigation-drawer v-model="drawer" app mini-variant>
			<!--  -->
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>CRUD Demo</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container fluid style="max-width: 1600px">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({ drawer: null })
};
</script>
