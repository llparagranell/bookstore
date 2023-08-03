import { useNavigate } from "react-router-dom";
import "./footer.css";
function Footer() {
    const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-container">
        <li style={{ display: "inline-block" }}>
          @copyright - llparagranell(school project)
        </li>

        <ul className="footer-ul">
          <li onClick={()=> navigate('/')}>Home</li>
          <li onClick={()=> navigate('/about')}>About</li>
          <li onClick={()=> navigate('/contact')}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
