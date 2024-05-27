// import { combineReducers, createStore } from "redux";
// import texts from "../modules/texts.js";

// // 1. rootReducer를 만들기
// const rootReducer = combineReducers({ texts });
// //({})안에 뭐가들어가? 모둘폴더 안에 넣을 값들이 넣을예정임 reduce들이 들어감

// // 2. store를 조합하기
// const store = createStore(rootReducer);
// // 3. 만든 store를 export

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const texts = createSlice({
  name: "texts",
  initialState: localStorage.getItem("texts") || [],
  reducers: {
    onAddText(state, action) {
      // console.log(state);
      // console.log(action.payload);
      return [...state, action.payload];
    },
  },
});
export let { onAddText } = texts.actions;

export default configureStore({
  reducer: {
    texts: texts.reducer,
  },
});
