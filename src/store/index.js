import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userList: [],
		headers: [
			{text: 'Number', value: 'id'},
			{text: 'UserName', value: 'username'},
			{text: 'Name', value: 'name'},
			{text: 'eMail', value: 'email'},
			{text: 'Phone', value: 'phone'},
			{text: 'Website', value: 'website'},
			{text: '', value: 'select'},
			{text: '', value: 'delete'}
		],
		search: '',
		order: 0,
		deletedId: 0,
		selectedUsers: []
	},
	getters: {
		getFoundList (state) {
			return state.userList.filter(item => {
				return item.username.toLowerCase().includes(state.search.toLowerCase())
			});
		},
		getSelectedList (state) {
			return state.userList.filter(item => {
				return item.selected === true
			})
		}
	},
	mutations: {
		fillUsersList (state, data) {
			state.userList = data
		},
		setSearch (state, data) {
			state.search = data
		},
		setOrder (state, data) {
			state.order = data
		},
		setIndex (state, data) {
			state.index = data
		},
		setId (state, data) {
			state.deletedId = data
		},
		setSelectedUser (state, data) {
			const list = state.userList
			list.map(item => {
				if (item.id === data.id) {
					item.selected = true
				}
			})
			state.userList = list
		},
		deleteSelectedUser (state, data) {
			const list = state.userList
			list.map(item => {
				if (item.id === data.id) {
					item.selected = false
				}
			})
			state.userList = list
		}
	},
	actions: {
		sortList ({state, commit}) {
			let list = state.userList;
			let order = state.order;
			const comparator = function (a, b) {
				return a.id > b.id ? 1 : a.id === b.id ? 0 : -1;
			};
			list.sort((a, b) => order ? comparator(a, b) : comparator(b, a));
			commit('fillUsersList', list);
			commit('setOrder', 1 - order);
		},
		async deleteUser ({state, commit}) {
			// предполагается, что после метода Delete сервер присылает ответ с обновленными данными или формируется новый Get запрос
			// для обновления данных, но т.к. текущий API
			// не имеет такой возможности, поля удаляются также на стороне фронта
			const list = state.userList;
			const index = list.findIndex(item => item.id === state.deletedId);
			list.splice(index, 1);
			commit('fillUsersList', list);
			await fetch(`https://jsonplaceholder.typicode.com/users/${state.deletedId}`, {
				method: 'DELETE'
			});
		}
	}
})
