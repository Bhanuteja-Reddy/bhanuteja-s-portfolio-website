import { Button, Card, Col, Row, Typography, Image } from 'antd'
import React from 'react';
import './about.css';

const { Text, Title } = Typography;
const { Meta } = Card;
const About = () => {

    const openResumeInNewTab = () => {
        window.open('https://docs.google.com/document/d/1-tMJaoQgWWbhp44I9919VDcpI4cYMj-IO7bYLwz5Leg/edit', "_blank");
    }
    return (
        <Card>
            <Row>
                <Col xs={{ span: 24 }} lg={{ span: 4, offset: 0 }}>
                    <Card
                        cover={
                            <Image
                                width={200}
                                src="bhanu_teja_reddy_profile_pic.jpg"
                                alt='Bhanuteja Reddy'
                            />}
                    >
                        <Meta
                            title="Bhanuteja Reddy"
                            description="Software Engineer | Full-Stack Developer |  MERN Stack | PERN Stack |  DevOps"
                        />
                    </Card>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 19, offset: 1 }}>
                    <Title level={2}>Hi there <span>&#128075;</span></Title>
                    <Title level={3}>I’m BhanuTeja Reddy, nice to meet you. Please take a look around!</Title>
                    <Text strong> I am passionate about building excellent software that improves the lives of those around me.
                    I specialize in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management development.
                    I have {new Date().getFullYear() - 2018}+ years of experience of building and maintaining Websites, Mobile Applications.I love Javascript, Node, React, Redux, Html, CSS, Bootstrap.
                    </Text>
                    <br /><br />
                    <Button shape='round' onClick={openResumeInNewTab}>View Resume</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default About
