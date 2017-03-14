const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
import {Layout, Menu,  Icon, Dropdown, Button, Card, Row, Input,Table,Popconfirm} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">退出系统</a>
        </Menu.Item>
    </Menu>
);

class Intention extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: '名字',
            dataIndex: 'name',
        }, {
            title: '地址',
            dataIndex: 'city',
        }, {
            title: '意向大小',
            dataIndex: 'intent',
        }, {
            title: '视觉取向',
            dataIndex: 'view',
        }, {
            title: '需求类型',
            dataIndex: 'type',
        }, {
            title: '预算范围',
            dataIndex: 'charge',
        }, {
            title: '电话',
            dataIndex: 'num',
        },{
            title: '留言',
            dataIndex: 'content',
            width: '30%',
        },{
            title: '删除',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                            // <Popconfirm title="确定要删除吗?" onConfirm={() => this.onDelete(index)}>
                            //     <a href={`/admin/message/delete/${record.id}`}>delete</a>
                            // </Popconfirm>
                            <a href={`/admin/message/delete/${record.id}`}>delete</a>

                );
            },
        }];

        this.state= {
            dataSource: []
        }


    };
    componentDidMount(){
        fetch('/admin/message/all', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                dataSource: data
            });
        });
    }


    onDelete (index) {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    };
    render(){

        const columns = this.columns;
        console.log(this.state.dataSource);
        return (
            <div>
                <Table bordered dataSource={this.state.dataSource} columns={columns} />
            </div>
        );
    }
}




class Frame extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header" theme="dark">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px', float: 'right'}}
                    >
                        <Menu.Item key="1">
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button>超级管理员</Button>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{padding: '0 24px', margin: 0, minHeight: 500}}>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="1"><a href="/admin/update">修改密码</a></Menu.Item>
                            <Menu.Item key="2"><a href="/admin/iron_pot">铁壶管理</a></Menu.Item>
                            <Menu.Item key="3"><a href="/admin/designer">设计师管理</a></Menu.Item>
                            <Menu.Item key="4"><a href="/admin/news">最新资讯</a></Menu.Item>
                            <Menu.Item key="5"><a href="/admin/about_us">关于我们</a></Menu.Item>
                            <Menu.Item key="6"><a href="/admin/message">留言管理</a></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '24px 24px 0'}}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 480}}>
                            <Intention/>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{textAlign: 'center'}}>
                    Coptyright ©2017 Support by TieFu
                </Footer>
            </Layout>
        )
    }
}
class Admin extends React.Component {
    render() {
        return (
            <Frame/>
        )
    }
}
ReactDOM.render(<Admin/>, document.querySelector('#page'));
