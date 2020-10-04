import { Row, Col, Divider } from 'antd';
import React from 'react';
import { FaReact, FaNode, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaGitlab, FaDocker, FaJira } from "react-icons/fa";

import './skills.css'

const Skills = () => {
    return (
        <div>
            <div className="container">
                <h3 className="sub-heading">Skills <span className="title">Summary</span> <Divider type='horizontal' /> </h3>
            </div>
            <Row justify='start'>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaReact size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            React
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaNode size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            Node
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaPhp size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            Php
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaJsSquare size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            Java Script
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaHtml5 size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            HTML5
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaCss3Alt size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            CSS3
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaGithub size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            GitHub
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaGitlab size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            GitLab
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaDocker size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            Docker
                          </h3>
                    </div>
                </Col>
                <Col className='skillBox' xs={12} sm={12} md={8} lg={8} xl={4}>
                    <div className="box">
                        <FaJira size={50} color="white" />
                        <h3
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            Jira
                          </h3>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Skills
