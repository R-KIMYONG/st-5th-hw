import TextContextProvider from "./components/TextContextProvider";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  // const [texts, setTexts] = useState(() =>
  //   localStorage.getItem("texts")
  //     ? JSON.parse(localStorage.getItem("texts"))
  //     : [],
  // );

  // useEffect(() => {
  //   localStorage.setItem("texts", JSON.stringify(texts));
  // }, [texts]);

  // const onAddText = (text) => {
  //   setTexts((prevTexts) => [...prevTexts, text]);
  // };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextContextProvider>
        <TextInput />
        <TextList />
      </TextContextProvider>
    </div>
  );
}

export default App;
