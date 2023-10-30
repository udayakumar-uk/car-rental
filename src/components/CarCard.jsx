
import { Badge, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function CarCard(prop){
    return(
        <>
            <div className="carcard mt-3">
                <img src={prop.mycar.img} alt={prop.mycar.make} />
                <div className="carcaption">
                    <h5>{prop.mycar.make} {prop.mycar.model}</h5>
                    <div className="d-flex gap-2 pb-3">
                        <Badge as={Col} bg="secondary" text="dark">{prop.mycar.year}</Badge>
                        <Badge as={Col} bg="secondary" text="dark">{prop.mycar.fuel_type}</Badge>
                        <Badge as={Col} bg="secondary" text="dark">{prop.mycar.transmission === "a" ? "Auto" : "Manual"}</Badge>
                    </div>
                    <Link to="car" className='btn btn-primary viewmore-btn'>View more &nbsp;<span className="material-symbols-rounded">east</span></Link>
                    {/* <Button >View more</Button> */}
                </div>
            </div>
        </>
    )
}