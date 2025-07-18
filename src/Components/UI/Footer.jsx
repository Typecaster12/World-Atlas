import { MdPlace } from 'react-icons/md';
import footerData from '../../API/footerApi';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  //object for icons;
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }


  return (
    <footer className="footer-section">
      <div className="footer-container">
        {footerData.map((curEle, index) => {
          const { icon, title, details } = curEle;

          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-footer">
        <div className="copyright-container">
          <div className="copyright">
            <p>Copyright @ 2025. All Right Reserved, <span>HarshMishra</span></p>
          </div>

          <div className="copyright-nav">
            <ul className="nav-element">
              <li><NavLink className="copyright-ele" to="/">Home</NavLink></li>
              <li><a href="https://github.com/Typecaster12" target="_blank" rel="noopener noreferrer">
                Source Code
              </a></li>
              <li><a className="copyright-ele" target="_blank">Social</a></li>
              <li><NavLink className="copyright-ele" to="contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;