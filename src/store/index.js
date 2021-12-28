import { createStore } from 'vuex'

export default createStore({
  state: {
    array: [
      [
      {"count": 10, "color": '#288337', "checked": false},
      {"count": 3, "color": '#5d24d8', "checked": false},
      {"count": 5, "color": '#893a2a', "checked": false},
      {"count": 8, "color": '#efa226', "checked": false},
      ],
      [
      {"count": 10, "color": '#c1a1e0', "checked": false},
      {"count": 3, "color": '#769c1e', "checked": false},
      {"count": 5, "color": '#eaf5f0', "checked": false},
      {"count": 8, "color": '#e77987', "checked": false},
      ],
      [
      {"count": 10, "color": '#d5a1d0', "checked": false},
      {"count": 3, "color": '#3c89c0', "checked": false},
      {"count": 5, "color": '#1f234c', "checked": false},
      {"count": 8, "color": '#2260f0', "checked": false},
      ],
      [
      {"count": 10, "color": '#1f3684', "checked": false},
      {"count": 3, "color": '#bc3194', "checked": false},
      {"count": 5, "color": '#987e10', "checked": false},
      {"count": 8, "color": '#b22f40', "checked": false},
      ],
      [
      {"count": 10, "color": '#57a92b', "checked": false},
      {"count": 3, "color": '#95b1b7', "checked": false},
      {"count": 5, "color": '#d75360', "checked": false},
      {"count": 8, "color": '#f39bcb', "checked": false},
      ],
    ],
  },
  mutations: {
    changeCheckedStatus(state, payload) {
        state.array[payload.idx][payload.index].checked =  !state.array[payload.idx][payload.index].checked
    },
    changeColor(state, payload) {
      let n = payload.index
      let m = payload.event.target.value
      let o = payload.idx
      state.array[o][n].color =  m
  },
    changeCount(state, payload) {
      let n = payload.index
      let m = +payload.event.target.value
      let o = payload.idx
      state.array[o][n].count =  m
    },
    squareDecrement(state, payload) {
      state.array[payload.idx][payload.index].count--
    },
    isNotCheckedAll(state,payload) {
      for (let one of state.array[payload]) {
        one.checked = false
      }
    },
    isCheckedAll(state,payload) {
      for (let one of state.array[payload]) {
        one.checked = true
      }
    },
  },
  getters: {
    array(state) {
      return state.array},
    },
})
