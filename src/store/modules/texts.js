const initialState = {
  texts: localStorage.getItem("texts") || [],
};

const texts = (state = initialState, action) => {
  switch (action.type) {
    case "onAddText":
      return {
        ...state,
        texts: [...state.texts, action.payload],
      };
    default:
      return state;
  }
};

export default texts;
