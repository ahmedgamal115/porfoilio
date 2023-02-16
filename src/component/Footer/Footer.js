import { CDBFooter, CDBBox } from "cdbreact"
import logo from '../../assets/images/logo_1.png'
import facebook from '../../assets/images/facebook.png'
import github from '../../assets/images/icons8-github-96.png'
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
                <a href="https://www.facebook.com/profile.php?id=100008686094491&mibextid=ZbWKwL"><img src={facebook} alt="facebook" /></a>
                <a href="https://instagram.com/ahmed_gamal_emam_?igshid=YmJhNjkzNzY="><img src={instagram} alt="instagram" /></a>
                <a href="https://wa.me/qr/E5LK3J7H24XFM1"><img src={whatsapp} alt="whatsapp" /></a>
                <a href="https://github.com/ahmedgamal115"><img src={github} alt="github" /></a>
            </div>
        </span>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  )
}

export default Footer
