import { useDispatch, useSelector } from "react-redux/es/exports";
import { getData } from "./dataSlice";
import "./App.css";

function App() {
  const disPatch = useDispatch();
  const number = useSelector((store) => {
    return store.data.value;
  });
  const state = useSelector((store) => {
    return store.data.status;
  });
  const click = () => {
    disPatch(getData());
  };

  if (state === "loading") {
    return <h1>로딩중입니다</h1>;
  }
  return (
    <>
      <button onClick={click}>RTK THUNK</button>
      <h1>{number}</h1>
      <h2>{state}</h2>
    </>
  );
}

export default App;
