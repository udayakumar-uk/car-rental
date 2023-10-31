
import React  from 'react';
import { Button, Container, Form, Col, Row, Stack} from 'react-bootstrap';

import CarCard from '../components/CarCard';

import Audi from '../img/cars/audi/audi-1.png';
import Bmw from '../img/cars/bmw/bmw-1.png';
import Bugatti from '../img/cars/bugatti/bugatti-1.png';
import Ford from '../img/cars/ford/ford-1.png';
import Toyota from '../img/cars/toyota/toyota-1.png';


export default function HomePage(){

    var years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 
                    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,];

    const [year, setYear] = React.useState(years);
    const [cars, setCars] = React.useState([]);

    React.useEffect(() => {
        var mycars = ['audi', 'bmw', 'bugatti', 'ford', 'toyota'];
        var carImg = [Audi, Bmw, Bugatti, Ford, Toyota];

        Promise.all(mycars.map((car, i) => 
            fetch('https://api.api-ninjas.com/v1/cars?make='+car+'&limit=1', {
                headers: { 'X-Api-Key': 'rvv0/rVwBcnmAE5XHCXTqA==8047v8UTsnYmf04u' },
                method: 'GET'
            }).then(res => res.json()).then(result => ({ ...result[0], img: carImg[i], id: i }))
        ))
        .then(newCars => {
            setCars(newCars);
            console.log(newCars);
        });

    }, []);

    // send cars data to a component
    const latCars = cars.map((car) => <Col sm="6" md="4"><CarCard key={car.id} mycar={car} /> </Col>);

    // option values for years
    const optionValue = year.map(ye => <option key={ye} value={ye}>{ye}</option>);

    return(
        <>
        <div className='home-container'>
            <Container>
                <h1>Looking to Save more on <br /> your Rental Car?</h1>

                <div className='filter-wrapper shadow'>
                    <Form className='filterSearch text-dark'>
                        <Form.Group as={Row} className='align-items-center'>
                            <Col sm='3' className='d-flex align-items-center mb-3 mb-sm-0'>
                                <span className="material-symbols-rounded">directions_car</span>
                                <Form.Select sm={3} name='make' id='make'>
                                    <option>Select Car Type</option>
                                    <option value='audi'>Audi</option>
                                    <option value='bmw'>BMW</option>
                                    <option value='bugatti'>Bugatti</option>
                                    <option value='ford'>Ford</option>
                                    <option value='maruti'>Maruti</option>
                                </Form.Select>
                            </Col>
                            <Col sm='3' className='d-flex align-items-center mb-3 mb-sm-0'>
                                <span className="material-symbols-rounded">event_upcoming</span>
                                <Form.Select name='year' id='year'>
                                    <option>Select Year</option>
                                    {optionValue}
                                </Form.Select>
                            </Col>
                            <Col sm='3' className='d-flex align-items-center mb-3 mb-sm-0'>
                                <span className="material-symbols-rounded">auto_transmission</span>
                                <Form.Select name='transmission' id='transmission'>
                                    <option>Select Transmission</option>
                                    <option value='m'>Manual</option>
                                    <option value='a'>Automatic</option>
                                </Form.Select>
                            </Col>
                            <Col sm='3'>
                                <Button  id="searchBtn" type="submit" onClick={(e) => e.preventDefault()}><span className="material-symbols-rounded">search</span> Search </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </div>

        <div className='latest-car py-4'>
            <Container>
                <h2>Latest Cars</h2>
                <Row>
                    {latCars}
                </Row>
            </Container>
        </div>

        </>
    )
}