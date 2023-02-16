import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect } from 'react';
import logo from '../assets/images/logo_1.png'
import facebook from '../assets/images/facebook.png'
import github from '../assets/images/icons8-github-96.png'
import instagram from '../assets/images/instagram.png'
import whatsapp from '../assets/images/whatsapp.png'

const BasicExample = () => {
    const [activeLink , setActiveLink] = useState('Home')
    const [scrolled , setScrolled] = useState(false)
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll',onScroll)
        return () => window.removeEventListener('scroll',onScroll)

    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'Home' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('Home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink === 'Skills' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('Projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar_text'>
            <div className='social-icon'>
                <a href="https://www.facebook.com/profile.php?id=100008686094491&mibextid=ZbWKwL"><img src={facebook} alt="facebook" /></a>
                <a href="https://instagram.com/ahmed_gamal_emam_?igshid=YmJhNjkzNzY="><img src={instagram} alt="instagram" /></a>
                <a href="https://wa.me/qr/E5LK3J7H24XFM1"><img src={whatsapp} alt="whatsapp" /></a>
                <a href="https://github.com/ahmedgamal115"><img src={github} alt="github" /></a>
            </div>
            <button className='connent_btn' onClick={()=>{console.log('Connect')}}><span>let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;