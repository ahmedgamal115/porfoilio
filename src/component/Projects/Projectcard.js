import { Col } from "react-bootstrap"


const Projectcard = ({title,describtion,imgURL}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgURL} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{describtion}</span>
            </div>
        </div>
    </Col>
  )
}

export default Projectcard
