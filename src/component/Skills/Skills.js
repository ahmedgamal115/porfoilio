import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorshape from '../../assets/images/wallpaperflare.com_wallpaper.jpg'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";

const Skills = () => {
    const skillsValues = [60, 80, 90]
    const [animation,setAnimation] = useState(false)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    useEffect(()=>{
        
        window.onscroll = function(){
            if(window.scrollY >= document.querySelector('.skill').offsetTop - 300){
                setAnimation(true)
            }else{
                setAnimation(false)
            }
        }
        
    },[])

  return (
    <section className="skill" id="Skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <div className="prograss">
                                    <div className="outer">
                                        <div className="inner">
                                            {skillsValues[0]} %
                                        </div>
                                    </div>
                                    <svg width={160} height={160}>
                                        <defs>
                                            <linearGradient id="grandientColor">
                                                <stop offset={0} stopColor="#e91e63"/>
                                                <stop offset={100} stopColor="#673ab7"/>
                                            </linearGradient>
                                        </defs>
                                        <circle cy={80} cx={80} r={65} strokeDashoffset={animation ? "160" : "400"}/>
                                    </svg>
                                </div>
                                <h5>Web Design</h5>
                            </div>
                            <div className="item">
                                <div className="prograss">
                                    <div className="outer">
                                        <div className="inner">
                                            {skillsValues[1]} %
                                        </div>
                                    </div>
                                    <svg width={160} height={160}>
                                        <defs>
                                            <linearGradient>
                                                <stop offset={0} stopColor="#e91e63"/>
                                                <stop offset={100} stopColor="#673ab7"/>
                                            </linearGradient>
                                        </defs>
                                        <circle cy={80} cx={80} r={65} strokeDashoffset={animation ? "80" : "400"}/>
                                    </svg>
                                </div>
                                <h5>Web Developer</h5>
                            </div>
                            <div className="item">
                                <div className="prograss">
                                    <div className="outer">
                                        <div className="inner">
                                            {skillsValues[2]} %
                                        </div>
                                    </div>
                                    <svg width={160} height={160}>
                                        <defs>
                                            <linearGradient>
                                                <stop offset={0} stopColor="#e91e63"/>
                                                <stop offset={100} stopColor="#673ab7"/>
                                            </linearGradient>
                                        </defs>
                                        <circle cy={80} cx={80} r={65} strokeDashoffset={animation ? "40" : "400"}/>
                                    </svg>
                                </div>
                                <h5>Embedded System</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorshape} alt="background" />
    </section>
  )
}

export default Skills
