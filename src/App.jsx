import { useEffect } from "react";
import { useSelector } from "react-redux";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  // const [texts, setTexts] = useState(() =>
  //   localStorage.getItem("texts")
  //     ? JSON.parse(localStorage.getItem("texts"))
  //     : [],
  // );
  const initialValue = useSelector((state) => state.texts);
// console.log(initialValue.texts)
  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(initialValue.texts));
  }, [initialValue.texts]);

  // const onAddText = (text) => {
  //   setTexts((prevTexts) => [...prevTexts, text]);
  // };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </div>
  );
}

export default App;
