export default {
    increment (state) {
        state.count += 2
      },
      increase (state, payload) {
        state.count += payload.n
      },
    }