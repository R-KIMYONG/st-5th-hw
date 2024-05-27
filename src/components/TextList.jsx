import { useSelector } from "react-redux";

export default function TextList() {
  const initialValue = useSelector((state) => state.texts);

  return (
    <ul>
      {initialValue.texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
