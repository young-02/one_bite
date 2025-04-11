import "./Header.css";
const Header = ({ leftChild, title, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};
export default Header;
