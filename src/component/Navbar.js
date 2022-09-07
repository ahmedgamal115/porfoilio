import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect } from 'react';
import logo from '../assets/images/icons8-smartcash-100.png'
import facebook from '../assets/images/icons8-facebook-100.png'
import tiwitter from '../assets/images/icons8-twitter-100.png'
import instagram from '../assets/images/icons8-instagram-100.png'
import whatsapp from '../assets/images/icons8-whatsapp-100.png'

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
            <Nav.Link href="#Skils" className={activeLink === 'Skills' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('Skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink === 'Projects' ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('Projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar_text'>
            <div className='social-icon'>
                <a href="#"><img src={facebook} alt="facebook" /></a>
                <a href="#"><img src={tiwitter} alt="tiwitter" /></a>
                <a href="#"><img src={instagram} alt="instagram" /></a>
                <a href="#"><img src={whatsapp} alt="whatsapp" /></a>
            </div>
            <button className='connent_btn' onClick={()=>{console.log('Connect')}}>let's connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;