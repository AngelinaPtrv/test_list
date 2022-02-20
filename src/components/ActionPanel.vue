<template>
	<v-row
		no-gutters
		justify="space-between"
		align="center"
		class="pb-5"
	>
		<v-col
			cols="5"
		>
			<v-text-field
				outlined
				dense
				v-model="filter"
				label="Find user"
				hide-details
			/>
		</v-col>
		<v-col cols="auto">
			<v-btn
				rounded
				depressed
				outlined
				small
				@click="sortUsers"
			>
				Sort by ID
			</v-btn>
			<v-btn
				fab
				x-small
				depressed
				outlined
				class="ml-5"
				@click="gotoSelectedUsers"
			>
				<v-icon>mdi-star</v-icon>
			</v-btn>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "ActionPanel",
	computed: {
		filter: {
			get () {
				return this.$store.state.search
			},
			set (value) {
				this.$store.commit('setSearch', value)
			}
		}
	},
	methods: {
		sortUsers () {
			this.$store.dispatch('sortList')
		},
		gotoSelectedUsers () {
			this.$router.push('/selected')
		}
	}
}
</script>

<style scoped>

</style>
