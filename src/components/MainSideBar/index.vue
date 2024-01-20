<template>
	<div class="sidebar__main">
		<table>
			<thead>
				<tr>
					<th>Ф.И.О.</th>
					<th>Телефон</th>
					<th>Город</th>
					<th>Статус</th>
					<th>Дата создания</th>
					<th>Действия</th>
				</tr>
			</thead>

			<transition-group
				name="fade"
				tag="tbody"
				@drop="drop"
				@dragend="dragEnd"
			>
				<tr
					v-for="(client, index) in filteredClients"
					:key="client.id"
					draggable="true"
					@dragstart="dragStart(index)"
					@dragover.prevent="dragOver(index)"
					@drop.prevent="drop"
					@dragend="dragEnd"
					:class="{
								dragging: draggedIndex === index,
								over: overIndex === index
							}"
				>
					<td
						class="client-name"
						@click="goToClientInfo(client.id)"
					>
						{{ client.fullname }}
					</td>
					<td>{{ client.phone }}</td>
					<td>{{ client.region }}</td>
					<td>{{ client.status }}</td>
					<td>{{ formatDate(client.created_at) }}</td>
					<td>
						<div class="client-action">
							<button
								class="btn-edit"
								@click="editClient(client)"
							>
								<span class="icon-edit"></span>
							</button>
							<button
								class="btn-delete"
								@click="removeClient(client.id)"
							>
								<span class="icon-delete"></span>
							</button>
						</div>
					</td>
				</tr>
			</transition-group>
		</table>

		<AddClient v-if="!editing" />
		<EditClient
			v-else :client="clientToEdit"
			@update="updateClient"
			@cancel="cancelEdit"
		/>
	</div>
</template>

<script>
import AddClient from './AddClient/index.vue';
import EditClient from './EditClient/index.vue';

export default {
	name: 'MainSideBar',
	components: {
		AddClient,
		EditClient,
	},
	props: {
		searchQuery: String,
		filterStatus: String,
	},
	data() {
		return {
			editing: false,
			clientToEdit: null,
			draggedIndex: null,
			overIndex: null,
		};
	},
	computed: {
		clients() {
			return this.$store.state.clients;
		},
		filteredClients() {
			return this.clients.filter((client) => client.fullname.includes(this.searchQuery)
					&& (this.filterStatus === '' || client.status === this.filterStatus));
		},
	},
	created() {
		this.$store.dispatch('fetchClients');
	},
	methods: {
		formatDate(dateString) {
			const date = new Date(dateString);
			const year = date.getFullYear().toString().substr(-2);
			const month = (`0${date.getMonth() + 1}`).slice(-2);
			const day = (`0${date.getDate()}`).slice(-2);
			return `${day}/${month}/${year}`;
		},
		goToClientInfo(clientId) {
			this.$router.push({ name: 'ClientInfo', params: { id: clientId } });
		},
		removeClient(clientId) {
			this.$store.dispatch('removeClient', clientId);
		},
		editClient(client) {
			this.editing = true;
			this.clientToEdit = { ...client };
		},
		updateClient(updatedClient) {
			this.$store.dispatch('updateClient', updatedClient);
			this.editing = false;
			this.clientToEdit = null;
		},
		cancelEdit() {
			this.editing = false;
			this.clientToEdit = null;
		},
		dragStart(index) {
			this.draggedIndex = index;
		},
		dragOver(index) {
			this.overIndex = index;
		},
		drop() {
			if (this.draggedIndex !== null && this.overIndex !== null) {
				const draggedClient = this.clients.find(
					(client) => client.id === this.filteredClients[this.draggedIndex].id,
				);
				const fromIndex = this.clients.indexOf(draggedClient);
				const toIndex = this.clients.indexOf(this.filteredClients[this.overIndex]);
				this.clients.splice(fromIndex, 1);
				this.clients.splice(toIndex, 0, draggedClient);
			}
			this.dragEnd();
		},
		dragEnd() {
			this.draggedIndex = null;
			this.overIndex = null;
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/SideBar/Main/index.scss';
</style>
