import './header.css'
import City from'../../Utils/Img/Logos/citybank.svg';
import Global from'../../Utils/Img/Logos/global.svg';
import Kuepa from'../../Utils/Img/Logos/kuepa.svg';


function Header() {
  return (

   <div className="cajaheader">
    <div className="logo">
    <img id="imgcity" src={City} alt="Esta es la imgcity" />
    <img id="imgglobal" src={Global} alt="Esta es la imgglobal" />
    <img id="imgkuepa" src={Kuepa} alt="Esta es la imgkuepa" />
    </div>
    </div>
  );
}


export default Header;

