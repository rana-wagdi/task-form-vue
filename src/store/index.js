import { createStore } from 'vuex'

const getDefaultUser = () => {
  return {
    nameOfOrgnization: '',
    activeOfOrgnization: '',
    city: '',
    government: '',
    chooseOption: null,
    name: '',
    position: '',
    phoneNumber: null,
    secondName: '',
    secondPhoneNumber:'',
    secondPosition:'',
    email:'',
    notes:''
  }
}

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    updateNameOfOrgnization(state, payload) {
      state.user.nameOfOrgnization = payload
    },
    updateActiveOfOrgnization(state, payload) {
      state.user.activeOfOrgnization = payload
    },
    updateCity(state, payload) {
      state.user.city = payload
    },
    updateGovernment(state, payload) {
      state.user.government = payload
    },
    updateChooseOption(state, payload) {
      state.user.chooseOption = payload
    },
    updateName(state, payload) {
      state.user.name = payload
    },
    updatePosition(state, payload) {
      state.user.position = payload
    },
    updatePhoneNumber(state, payload) {
      state.user.phoneNumber = payload
    },
    updateSecondName(state, payload) {
      state.user.secondName = payload
    },
    updateSecondPosition(state, payload) {
      state.user.secondPosition = payload
    },
    updateSecondPhoneNumber(state, payload) {
      state.user.secondPhoneNumber = payload
    },
    updateEmail(state, payload) {
      state.user.email = payload
    },
    updateNotes(state, payload) {
      state.user.notes = payload
    },
    
  },
  

  modules: {},
})