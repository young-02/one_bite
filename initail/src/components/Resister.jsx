import { useState, useRef } from "react";

//1.이름
//2. 생년월일
//3. 국적
//4. 자기소개

const Resister = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        <input
          ref={inputRef}
          name={"name"}
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name={"birth"}
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>

      <div>
        <select name={"country"} value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name={"bio"} onChange={onChange} value={input.bio} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  );
};
export default Resister;
