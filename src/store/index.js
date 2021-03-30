import { createStore } from 'vuex'
import Api from '@/services/api'

export default createStore({
  state: {
    user:[],
    folders:[],
  },
  mutations: {
    setUser:(state, user) => {state.user = user},
    setFolders:(state, folders) => {state.folders = folders}
  },
  getters: {
    getUser: (state) => (state.user),
    getFolders: (state) => (state.folders)
  },
  actions: {
    async fetchUser ({commit}) {
      return Api().get('api/v1/user').then(response => {commit('setUser', response.data)})
    },

    async fetchFolders ({commit}, id) {
      return Api().get(`/api/v1/teams/${id}/folders`).then(response => {commit('setFolders', response.data.data)})
    },


    
  },
  modules: {
  }
})
