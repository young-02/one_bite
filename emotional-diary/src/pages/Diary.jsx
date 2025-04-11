import { useParams } from "react-router-dom";
const Diary = () => {
  const params = useParams();
  console.log(params);
  return <>{params.id}번 일기 입니다.</>;
};
export default Diary;
