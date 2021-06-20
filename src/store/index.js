import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  // Message to display on banner
    bannerMessage: '',
    // Types: Error, Info, or Success
    bannerType: 'Info',
    // The user-chosen post to get details on
    detail: ''
  },
  getters: {
    getBannerMessage: (state) => {
      return state.bannerMessage
    },
    getBannerType: (state) => {
      return state.bannerType
    },
    getDetails: (state) => {
      return state.detail
    }
  },
  mutations: {
    setBannerMessage: (state, payload) => {
      state.bannerMessage = payload
    },
    setBannerType: (state, payload) => {
      state.bannerType = payload
    },
    setDetails: (state, payload) => {
      state.details = payload
    }
  },
  actions: {
    setBanner: (context, payload) => {
      context.commit('setBannerMessage', payload.message)
      context.commit('setBannerType', payload.type)
      context.commit('setDetails', payload.detail)
    },
    processId: ({ commit }, detail) => {
      commit('setZipCode', detail)
    },
    retrieveDetailData: (context) => {
      const detail = context.state.id
      if (detail) {
      // GET request for indvidual post data
        axios.get('https://jsonplaceholder.typicode.com/posts/' + detail)
          .then((response) => {
            // handle success
            const respData = response.data
            const detailData = Object.values(respData)
            // getting the id to get comments later
            const postId = detailData.id

            // Putting all this in an array so that data looks good for later work
            const detailHolder = []
            detailHolder.id = postId
            // console.log(detailHolder)

            // Put the cleaned up data in to an object into the array
            const detailObj = Object.assign({}, detailHolder)
            // console.log(detailObj)
            const detailPost = []
            detailPost.push(detailObj)
            // console.log(detailPost)
            context.commit('setDetailData', detailPost)
          })
          // .then(
          //   axios.get('https://jsonplaceholder.typicode.com/posts/' + detail + '/comments')
          //     .then((response) => {
          //       // handle success
          //       const commentRespData = response.data
          //       const commentData = Object.values(commentRespData)
          //       console.log(commentData)

          //     })
          //     .catch(((error) => {
          //       // handle error
          //         context.commit('setBannerMessage', 'ERROR! Unable to load comment data!')
          //         context.commit('setBannerType', 'Error')
          //         console.log(error.message)
          // ))
          .catch((error) => {
          // handle error
            context.commit('setBannerMessage', 'ERROR! Unable to load detailed data!')
            context.commit('setBannerType', 'Error')
            console.log(error.message)
          })
          .finally((response) => {
          // always executed
            console.log('Finished fetching post details!')
          })
      }
    }
  },
  modules: {
  }
})
