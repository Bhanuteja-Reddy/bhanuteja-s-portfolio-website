import React from 'react';
import { Divider, Steps, Typography } from 'antd'

import  './experiance.css'
const { Step } = Steps;
const Experiance = () => {
    return (
        <div>
            <div className="container">
                <h3 className="sub-heading">Experience <span className="title">Summary</span> <Divider type='horizontal' /> </h3>
            </div>
            <Steps direction='vertical'>
                <Step title="Senior Software Engineer" status='process' description={<><Typography>Schemax</Typography>
                    <Typography>Febraury 2020- Present</Typography></>} />
                <Step title="Software Developer" status='process' description={<><Typography>Schemax</Typography>
                    <Typography>September 2018- December 2020</Typography></>} />
                <Step title="Software Intern" status='process' description={<><Typography>Schemax</Typography>
                    <Typography>May 2018- September 2018</Typography></>} />
            </Steps>
        </div>
    )
}

export default Experiance
