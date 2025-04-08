import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. 마운트 : 탄생 : 최초 실행
  useEffect(() => {
    console.log("마운트");
  }, []);
  //2. 업데이트 : 변화, 리렌더링 될때마다 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  //3. 언마운트 : 죽음

  //두번째 인수의 값이 변할때마다 첫번째 인수로 전달한 콜백함수가 실행된다.
  //의존성배열 dependency array (deps)
  useEffect(() => {
    console.log(`count, ${count}, input, ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
