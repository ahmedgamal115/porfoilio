import { useState,useEffect } from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/images/—Pngtree—astronauts ride a shark in_6093370.png'

const Banner = () => {
  const [loopNum, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Designer" , "Web Developer" , "UI/UX Designer"]
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(()=>{
    const ticker = setInterval(() =>{
        tick()
    },delta)
    return () => {clearInterval(ticker)}
  },[text])

  const tick = ()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta / 2)

    }
    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true)
        setDelta(period)
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false)
        setLoopNumber(loopNum + 1)
        setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my page</span>
                    <h1>{`Hi I'am `} <span className='wrap'>{text}</span></h1>
                    <p>
                    Web Developer with experience in React, Node.js, Arduino, HTML, CSS, JavaScript, SQL, Oracle Database, MongoDB, SQL Server, Java, C++, ASP.NET and Python would be considered a stack developer with a wide range of skills.
                    <br/>
                    I am proficient in front end development using HTML, CSS and JavaScript, with a strong focus on React to build interactive and responsive user interfaces. I'm also skilled in server-side programming using Node.js, with knowledge of back-end frameworks like Express.js and Socket.io.
                    </p>
                    <button onClick={()=>{console.log('Connect')}}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner
