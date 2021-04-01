import { createStore } from 'vuex'
import Api from '@/services/api'

export default createStore({
  state: {
    user:[],
    folders:[],
    projects:[],
    specificFolder:[]
  },

  mutations: {
    setUser:(state, user) => {state.user = user},
    setFolders:(state, folders) => {state.folders = folders},
    setProjects:(state, projects) => {state.projects = projects},
    setSpecificFolder:(state, specificFolder) => {state.specificFolder = specificFolder},
    appendFolder:(state, folder) => {state.folders.push(folder)}
  },

  getters: {
    getUser: (state) => (state.user),
    getFolders: (state) => (state.folders),
    getProjects: (state) => (state.projects),
    getSpecificFolder: (state) => (state.specificFolder)
  },

  actions: {
    async fetchUser ({commit}) {
      return Api().get('api/v1/user')
      .then(response => {commit('setUser', response.data);})
      .catch(error => {console.log(error)})
    },

    async fetchFolders ({commit}, id) {
      return Api().get(`/api/v1/teams/${id}/folders`)
      .then(response => {commit('setFolders', response.data.data)})
      .catch(error => {console.log(error)})
    },

    async fetchProjects ({commit}, id) {
      return Api().get(`/api/v1/teams/${id}/projects?filters[is_workspace]=true`)
      .then(response => {commit('setProjects', response.data.data)})
      .catch(error => {console.log(error)})
    },

    async fetchSpecificFolder ({commit}, params) {
      return Api().get(`/api/v1/teams/${params.team_identifier}/folders/${params.id}`)
      .then(response => {commit('setSpecificFolder', response.data)})
      .catch(error => {console.log(error)})
    },

    async addFolder ({commit}, data){
      return Api().post(`/api/v1/teams/${data[1]}/folders`, data[0])
      .then(response=> {commit('appendFolder', response.data)})
      .catch(error => {console.log(error)})
    }
  }
})
