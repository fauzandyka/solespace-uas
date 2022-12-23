import { Card, Col, Container, Row, Image} from "react-bootstrap"
import shoesIMages1 from "../images/sepatu/Compass X Pot Meets Pop.png"
import shoesImages2 from "../images/sepatu/Adidas Yeezy Boost V2 Cream.png"
import shoesImages3 from "../images/sepatu/Converser All Star Low BW.png"
import shoesImages4 from "../images/sepatu/Gazelle High Vintage.png"
import shoesImages5 from "../images/sepatu/Gazelle Low Vintage Red.png"
import shoesImages6 from "../images/sepatu/Jhonson Galaxy Pro.png"
import shoesImages7 from "../images/sepatu/NewBasket.png"
import shoesImages8 from "../images/sepatu/Patrobas Ivan High Grey.png"
import shoesImages9 from "../images/sepatu/Piero Webber Blue White.png"
import shoesImage10 from "../images/sepatu/Sneaker Panarybody.png"
import shoesImages11 from "../images/sepatu/Ventela Low Natural Gum.png"
import shoesImages12 from "../images/sepatu/Ventela Noir Low.png"

const Shoes = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesIMages1} 
                                alt="Compass X Pot Meets Pop"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Compass X Pot Meets Pop</Card.Title>
                                    <Card.Text className="text-center">
                                        Hijau
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 3.400.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages2} 
                                alt="Adidas Yeezy Boost V2 Cream"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Adidas Yeezy Boost V2 Cream</Card.Title>
                                    <Card.Text className="text-center">
                                        Putih
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 2.500.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages3} 
                                alt="Converser All Star Low BW"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Converser All Star Low BW</Card.Title>
                                    <Card.Text className="text-center">
                                        Hitam
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 1.300.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages4} 
                                alt="Gazelle High Vintage"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Gazelle High Vintage</Card.Title>
                                    <Card.Text className="text-center">
                                        Hijau
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 530.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages5} 
                                alt="Gazelle Low Vintage Red"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Gazelle Low Vintage Red</Card.Title>
                                    <Card.Text className="text-center">
                                        Merah
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 450.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages6} 
                                alt="Jhonson Galaxy Pro"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Jhonson Galaxy Pro</Card.Title>
                                    <Card.Text className="text-center">
                                        Hijau
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 260.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages7} 
                                alt="NewBasket"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">NewBasket</Card.Title>
                                    <Card.Text className="text-center">
                                        Hitam
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 100.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages8} 
                                alt="Patrobas Ivan High Grey"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Patrobas Ivan High Grey</Card.Title>
                                    <Card.Text className="text-center">
                                        Abu-abu
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 289.900</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages9} 
                                alt="Piero Webber Blue White"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Piero Webber Blue White</Card.Title>
                                    <Card.Text className="text-center">
                                        Biru
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 400.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImage10} 
                                alt="Sneaker Panarybody"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Sneaker Panarybody</Card.Title>
                                    <Card.Text className="text-center">
                                        Putih
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 258.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages11} 
                                alt="Ventela Low Natural Gum"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ventela Low Natural Gum</Card.Title>
                                    <Card.Text className="text-center">
                                        Putih
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 250.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="shoesWrapper">       
                        <Card className="shoesImages">
                            <Image 
                                src={shoesImages12} 
                                alt="Ventela Noir Low"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ventela Noir Low</Card.Title>
                                    <Card.Text className="text-center">
                                        Hitam
                                    </Card.Text>
                                    <Card.Text className="text-center">Rp 449.000</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Shoes
