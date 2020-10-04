import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import About from '../about/about';
import Experiance from '../experience/experiance';
import Skills from '../skills/skills';
import ReachOutToMe from '../reach-me/reach-out-to-me';
import GitHubProjects from '../git-hub-projects/git-hub-projects';

import './portfolio-layout.css'
const { Header, Content, Footer } = Layout;
const PortfolioLayout = () => {
    return (<Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1" style={{display:'none'}}>nav 1</Menu.Item>
            </Menu>
        </Header>
        {/* padding: '0 50px', */}
        <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '100Vh' }}>
                <About></About>
                <Row justify='space-around'>
                    <Col><Experiance></Experiance></Col>
                    <Col><ReachOutToMe /></Col>
                </Row>

                <Skills></Skills>
                <GitHubProjects></GitHubProjects>
            </div>
        </Content>
        <br></br>

        <Footer style={{ textAlign: 'center' }}>Copyright © 2020  Bhanuteja Reddy. All rights reserved</Footer>
    </Layout>)
}

export default PortfolioLayout;
