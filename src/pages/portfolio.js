import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardTitle } from "reactstrap"
function portfolio() {
    return (
        <Container>
            <Row>
                <h1> Portfolio Page </h1>
            </Row>
            <br></br>
            <Row>
                <Card>
                    <Col md={6}>
                        <CardTitle> Sports Travel </CardTitle>
                        <CardImg id="Barcelona"
                            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVsOCpbVBGzU/v1/1000x-1.jpg"
                            alt="Barcelona" />
                        <CardText>
                            deployed link: https://ashraftakla.github.io/sports_travel/
                            <br></br>
                            repository link: https://github.com/btoney1988/sports_travel
                        </CardText>

                    </Col>
                </Card>
            </Row>
            <br></br>
            <Row>
                <Card>
                    <Col md={6}>
                        <CardTitle> Weather Dashboard </CardTitle>
                        <CardImg id="Beach"
                            src="https://nationaltoday.com/wp-content/uploads/2019/08/national-beach-day-1.jpg"
                            alt="Beach" />
                        <CardText>
                            deployed link: https://ashraftakla.github.io/homework6app/
                            <br></br>
                            repository link: https://github.com/ashraftakla/homework6app
                        </CardText>

                    </Col>
                </Card>
            </Row>
            <br></br>
            <Row>
                <Card>
                    <Col md={6}>
                        <CardTitle> Password Generator </CardTitle>
                        <CardImg id="Password"
                            src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/140833-laptops-feature-these-are-the-25-internet-passwords-you-must-not-use-and-here-are-five-ways-to-protect-your-passwords-image1-ogizhj53ka.jpg"
                            alt="Password" />

                        <CardText>
                            deployed link: https://ashraftakla.github.io/homework3/
                            <br></br>
                            repository link: https://github.com/ashraftakla/homework3
                        </CardText>

                    </Col>
                </Card>
            </Row>
            <br></br>
            <Row>
                <Card>
                    <Col md={6}>
                        <CardTitle> Whoofer </CardTitle>
                        <CardImg id="Portfolio"
                            src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
                            alt="Password" />
                        <CardText>
                            deployed link: https://glacial-brushlands-67266.herokuapp.com
                            <br></br>
                            repository link: https://github.com/ashraftakla/whoofer
                        </CardText>

                    </Col>
                </Card>
            </Row>
        </Container>
    )

}
export default portfolio