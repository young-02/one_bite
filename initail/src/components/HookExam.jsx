// hook 관련 팁
//1 . 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건문, 반복문 (조건부) 안에서는 사용x
//3. 커스텀 훅을 만들수 있다.

import useInput from "../Hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
