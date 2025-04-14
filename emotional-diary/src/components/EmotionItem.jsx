import "./EmotionItem.css";
import { getEmotionImg } from "../util/get-emotion-img";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `Emotion_on_${emotionId}` : ""}`}
    >
      <img
        className="emotion_img"
        src={getEmotionImg(emotionId)}
        alt={`emotion${emotionId}`}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
