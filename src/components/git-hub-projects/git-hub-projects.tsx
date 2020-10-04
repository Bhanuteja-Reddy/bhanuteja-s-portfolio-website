import { Avatar, Divider, List, Space, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ForkOutlined, StarOutlined } from '@ant-design/icons';

const GitHubProjects = React.memo(() => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getAllguthubProjects()
        return () => {
        }
    }, [])
    const getAllguthubProjects = async () => {
        await axios.get("https://api.github.com/users/bhanuteja-reddy/repos").then(
            res => {
                setProjects(res.data);
                console.log(res.data)
            }
        );
    }
    const IconText: ({ icon, text }: {
        icon: any;
        text: any;
    }) => JSX.Element = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    const isrednderLanguage=(projectData:any)=>{
       return  projectData.language?<Tag color={'geekblue'} key={Date.now()}>{projectData.language}</Tag>:<></>;
    }
    return (
        <div>
            <div className="container">
                <h3 className="sub-heading">GitHub Projects & <span className="title">Contributions</span> <Divider type='horizontal' /> </h3>
            </div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                dataSource={projects}
                renderItem={(project: any) => (
                    <List.Item
                        key={project.title}
                        actions={[
                            <IconText icon={StarOutlined} text={project.stargazers_count} key="list-vertical-star-o" />,
                            <IconText icon={ForkOutlined} text={project.forks_count} key="list-vertical-like-o" />,
                            isrednderLanguage(project)
                        ]}
                       
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={project.owner.avatar_url} alt={`${project.owner.avatar_url}`}/>}
                            title={<a href={project.html_url}>{project.name}</a>}
                            description={<span>{project.description}</span>}
                        />
                        {project.content}
                    </List.Item>
                )}
            />
        </div>
    )
})

export default GitHubProjects
