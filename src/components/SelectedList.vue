<template>
	<v-container>
		<v-row
			no-gutters
			justify="center"
			class="pb-10"
		>
			<span class="text-h6">Selected Users</span>
		</v-row>
		<v-row
			no-gutters
			justify="end"
			align="center"
			class="pb-5"
		>
			<v-btn
				rounded
				depressed
				outlined
				small
				@click="gotoUsers"
			>
				All users
			</v-btn>
		</v-row>
		<v-data-table
			:headers="headers"
			:items="usersList"
			hide-default-footer
			disable-sort
		>
			<template #item.select="{item}">
				<v-icon @click="deleteFromSelectedUser(item)">mdi-star</v-icon>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
export default {
	name: "SelectedList",
	computed: {
		headers () {
			return this.$store.state.headers
		},
		usersList () {
			return this.$store.getters.getSelectedList
		}
	},
	methods: {
		deleteFromSelectedUser (item) {
			this.$store.commit('setId', item.id)
			this.$store.commit('deleteSelectedUser', item)
		},
		gotoUsers () {
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>

</style>
