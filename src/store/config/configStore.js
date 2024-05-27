import counter from "../modules/count";

// 1. rootReducer를 만들기
const rootReducer = combineReducers({
  counter,
});
//({})안에 뭐가들어가? 모둘폴더 안에 넣을 값들이 넣을예정임 reduce들이 들어감

// 2. store를 조합하기
const store = createStore(rootReducer);
// 3. 만든 store를 export

export default store;
