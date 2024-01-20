<template>
	<div class="search-bar">
		<label for="search-bar">
			<input
				id="search-bar"
				type="text"
				v-model="searchQuery"
				placeholder="Поиск по Ф.И.О."
				@input="validateNameInput"
			>
		</label>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	data() {
		return {
			searchQuery: '',
		};
	},
	watch: {
		searchQuery(newQuery) {
			this.$emit('update:query', newQuery);
		},
	},
	methods: {
		validateNameInput() {
			this.searchQuery = this.searchQuery.replace(/[^а-яё\s]/gi, '');
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/SearchBar/index.scss';
</style>
