import { createStore } from 'vuex';
import api from '../api/index';

export default createStore({
	state: {
		clients: JSON.parse(localStorage.getItem('clients')) || [],
	},
	getters: {
	},
	mutations: {
		SET_CLIENTS(state, clients) {
			state.clients = clients;
		},
		ADD_CLIENT(state, client) {
			state.clients.push(client);
			localStorage.setItem('clients', JSON.stringify(state.clients));
		},
		REMOVE_CLIENT(state, clientId) {
			state.clients = state.clients.filter((client) => client.id !== clientId);
			localStorage.setItem('clients', JSON.stringify(state.clients));
		},
		UPDATE_CLIENT(state, updatedClient) {
			const index = state.clients.findIndex((client) => client.id === updatedClient.id);
			if (index !== -1) {
				state.clients.splice(index, 1, updatedClient);
				localStorage.setItem('clients', JSON.stringify(state.clients));
			}
		},
	},
	actions: {
		async fetchClients({ commit, state }) {
			if (state.clients.length === 0) {
				const clients = await api.getClients();
				commit('SET_CLIENTS', clients);
				localStorage.setItem('clients', JSON.stringify(clients));
			}
		},
		/* eslint-disable */
		addClient({ commit }, client) {
			const id = Date.now().toString();
			const created_at = new Date().toISOString();
			const newClient = { id, created_at, ...client };
			commit('ADD_CLIENT', newClient);
		},
		/* eslint-enable */
		removeClient({ commit }, clientId) {
			commit('REMOVE_CLIENT', clientId);
		},
		updateClient({ commit }, updatedClient) {
			commit('UPDATE_CLIENT', updatedClient);
		},
	},
	modules: {
	},
});
