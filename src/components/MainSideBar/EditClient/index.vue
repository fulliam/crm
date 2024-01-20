<template>
	<div class="edit-client">
        <label for="edit-fullname">
            <input
                id="edit-fullname"
                v-model="localClient.fullname"
                placeholder="Ф.И.О."
				@input="validateNameInput"
            />
        </label>

        <label for="edit-phone">
            <input
                id="edit-phone"
                v-model="localClient.phone"
                placeholder="+X-(XXX)-XXX-XX-XX"
				v-mask="'+#-(###)-###-##-##'"
            />
        </label>

        <label for="edit-region">
            <input
                id="edit-region"
                v-model="localClient.region"
                placeholder="Город"
				@input="validateCityInput"
            />
        </label>

		<DropdownStatusFilter
            v-model:status="localClient.status"
            :switchStyle="true"
        />

		<button @click="update" class="btn-refresh">Обновить</button>
		<button @click="cancel" class="btn-cancel">Отменить</button>
	</div>
</template>

<script>
import { mask } from 'vue-the-mask';
import DropdownStatusFilter from '@/components/DropdownStatusFilter/index.vue';

export default {
	name: 'EditClient',
	directives: { mask },
	props: {
		client: {
			type: Object,
			required: true,
		},
	},
	components: {
		DropdownStatusFilter,
	},
	data() {
		return {
			localClient: { ...this.client },
		};
	},
	methods: {
		update() {
			this.$emit('update', this.localClient);
		},
		cancel() {
			this.$emit('cancel');
		},
		validateNameInput() {
			this.localClient.fullname = this.localClient.fullname.replace(/[^а-яё\s]/gi, '');
		},
		validateCityInput() {
			this.localClient.region = this.localClient.region.replace(/[^а-яё-\s]/gi, '');
		},
	},
	watch: {
		client(newVal) {
			this.localClient = { ...newVal };
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/SideBar/Main/EditForm/index.scss'
</style>
