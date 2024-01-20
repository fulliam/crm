<template>
	<div class="client-info" v-if="client">
		<p>
			<span>Ф.И.О.:</span>
			{{ client.fullname }}.
		</p>
		<p>
			<span>
				Номер телефона:
			</span>
			{{ client.phone }}.
		</p>
		<p>
			<span>
				Город:
			</span>
			{{ client.region }}.
		</p>
		<p>
			<span>
				Статус:
			</span>
			{{ client.status }}.
		</p>
		<p>
			<span>
				Последнее изменение:
			</span>
			{{ formatDate(client.created_at) }}.
		</p>
	</div>
</template>

<script>
export default {
	name: 'ClientInfo',
	computed: {
		/* eslint-disable */
		client() {
			const clientId = this.$route.params.id;
			return this.$store.state.clients.find((client) => client.id == clientId);
		},
		/* eslint-enable */
	},
	methods: {
		formatDate(dateString) {
			const date = new Date(dateString);
			const year = date.getFullYear().toString().substr(-2);
			const month = (`0${date.getMonth() + 1}`).slice(-2);
			const day = (`0${date.getDate()}`).slice(-2);
			return `${day}/${month}/${year}`;
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/Pages/ClientInfo/index.scss';
</style>
