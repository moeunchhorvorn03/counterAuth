import { createStore } from 'vuex'
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

import counterModule from './Modules/counter/index.js'

const store = createStore({
    modules: {
        counter: counterModule
    },
    state () {
        return {
          isLoggIn: false
          
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store