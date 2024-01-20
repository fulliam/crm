<template>
	<div class="sidebar">
		<LeftSideBar />

		<div class="sidebar__filters">
			<SearchBar v-model:query="searchQuery" />

			<DropdownStatusFilter
				v-model:status="filterStatus"
				:switchStyle="false"
			/>
		</div>

		<MainSideBar
			:searchQuery="searchQuery"
			:filterStatus="filterStatus"
		/>
	</div>
</template>

<script>
import LeftSideBar from '@/components/LeftSideBar/index.vue';
import MainSideBar from '@/components/MainSideBar/index.vue';
import SearchBar from '@/components/SearchBar/index.vue';
import DropdownStatusFilter from '@/components/DropdownStatusFilter/index.vue';

export default {
	name: 'ClientList',
	components: {
		LeftSideBar,
		MainSideBar,
		SearchBar,
		DropdownStatusFilter,
	},
	data() {
		return {
			searchQuery: '',
			filterStatus: '',
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/Pages/ClientList/index.scss';
</style>
