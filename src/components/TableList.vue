<template>
	<v-container>
		<v-row
			no-gutters
			justify="center"
			class="pb-10"
		>
			<span class="text-h6">Users List</span>
		</v-row>
		<action-panel/>
		<v-data-table
			:headers="headers"
			:items="usersList"
			hide-default-footer
			disable-sort
		>
			<!-- eslint-disable-next-line -->
			<template #item.select="{item}">
				<v-icon @click="addSelectedUser(item)">{{ item.selected ? 'mdi-star' :  'mdi-star-outline'}}</v-icon>
			</template>
			<!-- eslint-disable-next-line -->
			<template #item.delete="{item}">
				<v-icon @click="deleteItem(item)">mdi-delete</v-icon>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>

import ActionPanel from "@/components/ActionPanel";
export default {
	name: "TableList",
	components: {ActionPanel},
	computed: {
		headers () {
			return this.$store.state.headers
		},
		usersList () {
			return this.$store.getters.getFoundList
		}
	},
	methods: {
		deleteItem (item) {
			this.$store.commit('setId', item.id)
			this.$store.dispatch('deleteUser')
		},
		addSelectedUser (item) {
			if (item.selected) {
				this.$store.commit('deleteSelectedUser', item)
			} else {
				this.$store.commit('setSelectedUser', item)
			}
		}
	}
}
</script>

<style scoped>

</style>
