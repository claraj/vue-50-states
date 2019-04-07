import axios from 'axios'

export default {
    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data 
        })
    },

    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data 
        })
    },

    setVisited(stateName, visited) {
        return axios.patch('/api/state/'+ stateName, { visited: visited }).then(response => {
            return response.data 
        })
    }

}