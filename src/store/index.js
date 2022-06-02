import { createStore } from "vuex";
import db from "@/firebase/firebaseInit";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default createStore({
  state: {
    invoiceModal: false,
    modalActive: false,
    invoiceData: [],
    invoicesLoaded: false,
    currentInvoiceArray: null
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state) {
      state.invoicesLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload) {
      state.currentInvoiceArray = state.invoiceData.filter(invoice => {
        return invoice.invoiceId === payload;
      });
    },
    DELETE_INVOICE(state, payload) {
      state.invoiceData = state.invoiceData.filter((invoice) => invoice.docId !== payload);
    },
  },
  actions: {
    async GET_INVOICES(context) {
      const colRef = collection(db, "invoices");
      const invoiceSnapsShot = await getDocs(colRef);
      invoiceSnapsShot.forEach((doc) => {
        const data = {
          docId: doc.id,
          invoiceId: doc.data().invoiceId,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerCity,
          billerZipCode: doc.data().billerZipCode,
          billerCountry: doc.data().billerCountry,
          clientName: doc.data().clientName,
          clientEmail: doc.data().clientEmail,
          clientStreetAddress: doc.data().clientStreetAddress,
          clientCity: doc.data().clientCity,
          clientZipCode: doc.data().clientZipCode,
          clientCountry: doc.data().clientCountry,
          invoiceDateUnix: doc.data().invoiceDateUnix,
          invoiceDate: doc.data().invoiceDate,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDateUnix: doc.data().paymentDueDateUnix,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoicePaid: doc.data().invoicePaid,
        };
        context.commit("SET_INVOICE_DATA", data);
      });

      context.commit("INVOICES_LOADED");
    },
    async DELETE_INVOICE({ commit }, docId) {
      const docRef = doc(db, "invoices", docId);
      await deleteDoc(docRef);
      commit("DELETE_INVOICE", docId);
    },
  },
  modules: {},
});
