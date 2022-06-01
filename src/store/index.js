import { createStore } from 'vuex';

export default createStore({
  state: {
    invoiceModal: false,
    modalActive: false
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    }
  },
  actions: {

  },
  modules: {}
});