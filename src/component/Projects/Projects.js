import { Row,Nav,Col, Tab } from 'react-bootstrap'
import Projectcard from './Projectcard'
import img1 from '../../assets/images/Landing Page.jpg'
import img2 from '../../assets/images/Todolist.jpg'
import img3 from '../../assets/images/Weather app.jpg'
import './Projects.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = () => {
    const Project = [
        {
            title: 'Landing Page',
            describtion: 'First Page in Web Site',
            imgURL: img1
        },
        {
            title: 'Todo List Application',
            describtion: 'First Page in Web Site',
            imgURL: img2
        },
        {
            title: 'Weather API App',
            describtion: 'First Page in Web Site',
            imgURL: img3
        }
    ]
  return (
    <div>
      <section className='Projects' id='Projects'>
        <Row>
            <Col>
                <h1>Projects</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Tab.Container className="projects-tabs" defaultActiveKey='First'>
                    <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="First">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Third">Tab three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="First">
                            <Row>
                            {Project.map((project,index)=>{
                                return(
                                    <Projectcard key={index}
                                    {...project}/>
                                )
                            })}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="Third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
      </section>
    </div>
  )
}

export default Projects
