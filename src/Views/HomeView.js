import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import unpressed from "../images/unpressed.png";
import pressed from "../images/pressed.png";
import kids from "../images/Kids.png";
import cheer from "../sounds/cheer.mp3";
import ReactAudioPlayer from "react-audio-player";
import logo from '../images/logo.jpg'

const HomeView = () => {
  const [clicked, setClicked] = useState(false);
  const cheers = cheer;

  useEffect(() => {
    checkClicked();
  }, []);

  const checkClicked = () => (clicked ? true : false);

  const changeClicked = () => {
    setClicked(!clicked);
  };

  return (
    <Container fluid className="mainContainer">
      <Row>
        <Col
        xl={{ span: 8, offset: 4 }} 
        lg={{ span: 8, offset: 4 }}
        md={{ span: 8, offset: 0 }}
        sm={{ span: 8, offset: 4 }}>
          {!clicked ? (
            <div className="buttonContainer">
              <Image
                src={pressed}
                className="img-responsive"
                onClick={changeClicked}
              />
              <Image src={logo} className='img-responsive logo'/>
            </div>
          ) : (
            <div className="buttonContainer">
              <ReactAudioPlayer src={cheer} autoPlay />
              <Image
                src={unpressed}
                className="img-responsive"
                onClick={changeClicked}
              />
              <p>¡GRACIAS PADRINOS!</p>
              <div className="kidsContainer">
                <Image src={kids} className="img-responsive kids" />
                <Image src={logo} className='img-responsive logo'/>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeView;
