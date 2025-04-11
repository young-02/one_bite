import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";

import { getEmotionImg } from "./util/get-emotion-img.js";
import Button from "./components/Button.jsx";
// 1. '/': 모든 일기를 조회하는 Home페이지
// 2. '/new' :새로운 일길을 작성하는 New페이지
//3. "/diary":일기를 상세히 조회하는 Diary페이지
function App() {
  return (
    <>
      <Header
        title="header"
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text="Right"></Button>}
      />
      <Button text={"qjxms"} onClick={() => console.log("클릭")} />
      <Button
        text={"qjxms"}
        type={"POSITIVE"}
        onClick={() => console.log("클릭")}
      />
      <Button
        text={"qjxms"}
        type={"NEGATIVE"}
        onClick={() => console.log("클릭")}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
