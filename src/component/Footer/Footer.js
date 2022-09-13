import { CDBFooter, CDBBox } from "cdbreact"
import logo from '../../assets/images/icons8-smartcash-100.png'
import facebook from '../../assets/images/facebook.png'
import tiwitter from '../../assets/images/icons8-twitter-100.png'
import instagram from '../../assets/images/instagram.png'
import whatsapp from '../../assets/images/whatsapp.png'
import './Footer.css'
const Footer = () => {
  return (
    <CDBFooter className="Footer">
      <CDBBox display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox className="" display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="60px"
            />
          </a>
        </CDBBox>
            <small className="ml-2">&copy; Ahmed Gamal, 2022. All rights reserved.</small>
        <CDBBox>
        <span className='navbar_text'>
            <div className='social-icon'>
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={tiwitter} alt="tiwitter" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={whatsapp} alt="whatsapp" /></a>
            </div>
        </span>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  )
}

export default Footer
