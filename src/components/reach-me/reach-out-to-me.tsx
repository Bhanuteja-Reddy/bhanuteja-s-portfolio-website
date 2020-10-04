import React from 'react';
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';
import { Divider, Timeline } from 'antd';

import './reach-out-to-me.css';
const ReachMe = () => {
  return (
    <div className="reach-me-out">
      <div className="container">
        <h3 className="sub-heading">Reach Out To Me <span className="title">On</span><Divider type='horizontal' /> </h3>
      </div>
      <Timeline mode="alternate">
        <Timeline.Item dot={<a href="https://www.linkedin.com/in/bhanuteja-reddi-8a7aa2159/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: 40 }} /></a>}>
          <a href="https://www.linkedin.com/in/bhanuteja-reddi-8a7aa2159/" target="_blank" rel="noopener noreferrer">Linked In </a>
          <br /><br />
        </Timeline.Item>
        <Timeline.Item dot={<a href="https://github.com/Bhanuteja-Reddy" target="_blank" rel="noopener noreferrer"><GithubOutlined style={{ fontSize: 40 }} /></a>}>
          <a href="https://github.com/Bhanuteja-Reddy" target="_blank" rel="noopener noreferrer">Github</a>&nbsp;&nbsp;&nbsp;
          <br /><br />
        </Timeline.Item>
        <Timeline.Item dot={<a href="https://www.facebook.com/rebats.rams" target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: 40 }} /></a>}>
          <a  href="https://www.facebook.com/rebats.rams" target="_blank" rel="noopener noreferrer">Facebook </a>
          <br /><br />
        </Timeline.Item>
        <Timeline.Item dot={<a href="https://twitter.com/BhanuTe85987775" target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{ fontSize: 40 }} /></a>}>
          <a href="https://twitter.com/BhanuTe85987775" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;&nbsp;
          <br /><br />
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default ReachMe
