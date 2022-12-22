import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro =() => {
    return(
    <div className='intro'>
        <Container className='text-black text-center d-flex justify-content-center
        align-items-center'>
          <Row>
            <Col>
                <div className='title'>SOLESPACE</div>
                <div className='title'>SOLUSI JALAN DENGAN GAYA</div>
                <div className='introButton mt-4 text-center'>
                    {/* <Button variant='dark'>Nonton</Button> */}
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro