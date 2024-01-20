<template>
	<div class="add-client">
        <label for="add-fullname">
            <input
                id="add-fullname"
                v-model="newClient.fullname"
                placeholder="Ф.И.О."
				@input="validateNameInput"
            />
        </label>

        <label for="add-phone">
            <input
                id="add-phone"
                v-model="newClient.phone"
                placeholder="+7-(ХХХ)-ХХХ-ХХ-ХХ"
				v-mask="'+7-(###)-###-##-##'"
            />
        </label>

        <label for="add-region">
            <input
                id="add-region"
                v-model="newClient.region"
                placeholder="Город"
				@input="validateCityInput"
            />
        </label>

        <DropdownStatusFilter
            v-model:status="newClient.status"
            :switchStyle="true"
        />

		<button @click="addClient" class="btn-add">Добавить</button>
	</div>
</template>

<script>
import { mask } from 'vue-the-mask';
import DropdownStatusFilter from '@/components/DropdownStatusFilter/index.vue';

export default {
	name: 'AddClient',
	directives: { mask },
	components: {
		DropdownStatusFilter,
	},
	data() {
		return {
			newClient: {
				fullname: '',
				phone: '',
				region: '',
				status: '',
			},
		};
	},
	methods: {
		addClient() {
			this.$store.dispatch('addClient', this.newClient);
			this.newClient = {
				fullname: '',
				phone: '',
				region: '',
				status: '',
			};
		},
		validateNameInput() {
			this.newClient.fullname = this.newClient.fullname.replace(/[^а-яё\s]/gi, '');
		},
		validateCityInput() {
			this.newClient.region = this.newClient.region.replace(/[^а-яё-\s]/gi, '');
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/SideBar/Main/AddForm/index.scss'
</style>
