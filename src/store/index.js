import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topMenuItem:[
      {
          title: 'Sign In'
      },
      {
          title: 'My Starbucks'
      },
      {
          title: 'Customer Service & Ideas'
      },
      {
          title: 'Find a Store'
      }
  ],
  btMenuItem:[
    {
        title: 'coffee'
    },
    {
        title: 'menu'
    },
    {
        title: 'store'
    },
    {
        title: 'responsibility'
    },
    {
        title: 'starbucks rewards'
    },
    {
        title: 'what\'s new'
    },
]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
