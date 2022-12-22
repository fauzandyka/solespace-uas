import { Navbar, Container, Nav } from "react-bootstrap"
import profilePic from "../images/icon/Profil.svg"
import logoPic from "../images/icon/Logo.svg"
const NavigationBar= () => {
    return(
        <div>
        <Navbar variant="light">
            <Container>
                <Navbar.Brand><img src={logoPic} alt="logo" /></Navbar.Brand>
                    <Nav>
                        <Nav.Link>BERANDA</Nav.Link>
                        <Nav.Link>LAYANAN</Nav.Link>
                        <Nav.Link>KONTAK</Nav.Link>
                        <Nav.Link>DAFTAR</Nav.Link>
                        <Nav.Link>MASUK</Nav.Link>
                    </Nav>                
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar