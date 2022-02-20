<template>
	<v-app>
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
export default {
	created() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				json.map(item => item.selected = false)
				this.$store.commit('fillUsersList', json)
			})
	}
}
</script>

<style lang="scss">

</style>
