import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./modalSlice";

export const store = configureStore({
  reducer: { modal: ModalReducer },
});
