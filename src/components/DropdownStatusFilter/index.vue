<template>
	<div
		class="dropdown-status-filter"
		:class="{
                 'small-margin': switchStyle,
                 'large-margin': !switchStyle
				}"
	>
		<label for="dropdown-status">
			<select
				id="dropdown-status"
				v-model="selectedStatus"
				:class="{
                         'large-padding': switchStyle,
                         'small-padding': !switchStyle
						}"
			>
				<option value="">Не выбрано</option>
				<option value="Активен">Активен</option>
				<option value="Неактивен">Неактивен</option>
				<option value="Приостановлен">Приостановлен</option>
			</select>
		</label>
	</div>
</template>

<script>
export default {
	name: 'DropdownStatusFilter',
	props: {
		switchStyle: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			selectedStatus: '',
		};
	},
	watch: {
		selectedStatus(newStatus) {
			this.$emit('update:status', newStatus);
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/Dropdown/index.scss';
</style>
