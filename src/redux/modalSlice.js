import { createSlice } from "@reduxjs/toolkit";
import { modalStore } from "./constants";

const modalSlice = createSlice({
  name: "modal",
  initialState: modalStore,
  reducers: {
    handleModal(state, action) {
      state.isShowen = action.payload;
    },
  },
});
export const { handleModal } = modalSlice.actions;
export const ModalReducer = modalSlice.reducer;
