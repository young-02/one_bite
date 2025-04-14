import "./DiaryItem.css";
import { getEmotionImg } from "../util/get-emotion-img";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";
const DiaryItem = ({ id, createdDate, content, emotionId }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImg(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
      </div>
    </div>
  );
};
export default DiaryItem;
