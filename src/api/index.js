import clients from '../mock/clients.json';

export default {
	getClients() {
		return new Promise((resolve) => {
			setTimeout(() => resolve(clients), 1000);
		});
	},
};
