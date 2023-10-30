import logo from '../logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar} from 'react-bootstrap';


export default function Header() {
    return (
        <header className="App-header">
            <Navbar className="bg-body-tertiary">
                <Container>
                    {/* <Link to="/"><img src={logo} alt='logo' height="50" /> </Link> */}
                    <Link to="/" className='fw-600 logo'>
                        <span className="material-symbols-rounded fs-4">directions_car</span>  RentCar  
                    </Link>
                    <Nav className='ms-auto'>
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                        <Button variant='primary' className='ms-2 btn-xs'>Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}