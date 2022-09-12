import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import './Contact.css'
import contectUs from '../../assets/images/—Pngtree—modern flat design concept of_5332895.png'
const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        massage:'',
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send')
    const [status,setStatus] = useState({})

    const onFormUpdate = (category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText('Sending....')
        let reponse = await fetch("http://localhost:5000/Contect",{
            method: "POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText('Send')
        let result = reponse.status;
        setFormDetails(formInitialDetails);
        if(result === 200){
            setStatus({success: true, massage: "Massage Sent Successfully"})
        }else{
            setStatus({success: false, massage: "Somethings wrong"})
        }
    }

  return (
    <section className="Contact" id="connect">
            <Row className="align-item-center">
                <Col md={6}>
                    <img src={contectUs} alt="Contact Us" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea rows="6" value={formDetails.massage} placeholder="Massage" onChange={(e)=>onFormUpdate('massage',e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.massage &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.massage}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
    </section>
  )
}

export default Contact
