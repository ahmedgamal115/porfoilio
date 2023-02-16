import { Row,Nav,Col, Tab } from 'react-bootstrap'
import Projectcard from './Projectcard'
import img1 from '../../assets/images/Landing Page.jpg'
import img2 from '../../assets/images/Todolist.jpg'
import img3 from '../../assets/images/Weather app.jpg'
import img4 from '../../assets/images/how-ecommerce-works.png'
import img5 from '../../assets/images/toolbox.jpg'
import img6 from '../../assets/images/images.jpg'
import './Projects.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = () => {
    const Project = [
        {
            title: 'Landing Page',
            imgURL: img1
        },
        {
            title: 'Todo List Application',
            imgURL: img2
        },
        {
            title: 'Weather API App',
            imgURL: img3
        },
        {
            title: 'e-commerce Project',
            imgURL: img4
        },
        {
            title: 'Toolbox Project',
            imgURL: img5
        },
        {
            title: 'GYM system Project',
            imgURL: img6
        }

    ]
  return (
    <div>
      <section className='Projects' id='Projects'>
        <Row>
            <Col>
                <h1>Projects</h1>
                <p>I have created many projects that showcase my skills and knowledge, demonstrating the ability to work with different technologies and languages to create innovative and effective solutions. With such a wide range of skills, with these qualifications I will be well placed to take on a variety of web development roles, from front end development to full development to database administration.</p>
                <Tab.Container className="projects-tabs" defaultActiveKey='First'>
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="First">Page 1</Nav.Link>
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
