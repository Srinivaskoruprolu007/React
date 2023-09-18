/* eslint-disable jsx-a11y/alt-text */
import logo from "../Images/logo192.png"
function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-1" style={{ background: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 text-white-50">React Course </span>
    </div>
  );
}
function SubHeader() {
  return <p style={subHeaderStyle} className="text-center">There is something to learn exciting</p>;
}
const subHeaderStyle = {
  color: "red",
  background: "yellow",
};

export default Header;
