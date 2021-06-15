import react, {FC} from 'react';
import logo from "../images/GetMeSomeVidz.png";


const Header: FC = () => {
    return(
        <a href='/'>
        <div className="header">
             <img src={logo} alt="Give me some VIDZ header"></img>
        </div>
        </a>
    )
}

export default Header