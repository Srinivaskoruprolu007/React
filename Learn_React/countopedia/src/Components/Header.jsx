import logo from "../Images/logo192.png";

function Header(){
    return(
        <div className="py-3 pl-2" style={{borderBottom:"1px solid #777"}}>
            <img src={logo} alt="logo" style={{height:"35px",verticalAlign:"top"}} />
            <span className="h2 pt-4 text-white-50">CountOPedia</span>
        </div>
    );
}
export default Header;