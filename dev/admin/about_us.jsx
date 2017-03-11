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


class Aboutus extends React.Component {
    render() {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Button type="primary">完成</Button>
                <Row>
                    <Card title="地址" bordered={false}>
                        <Input placeholder="公司联系地址" />
                    </Card>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Card title="邮箱" bordered={false}>
                        <Input placeholder="公司联系邮箱" />
                    </Card>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Card title="电话" bordered={false}>
                        <Input placeholder="公司联系电话" />
                    </Card>
                </Row>
            </div>
        )
    }
}


// const dataSource= [{
//     key: '0',
//     name: 'John Brown',
//     city: '太原',
//     intent: '大',
//     view: '美',
//     type: '礼品铁壶',
//     charge: '1000-80000',
//     num: '152345648456',
//     content:'字字字字字sdfsdfs字字字字字'
// },{
//     key: '1',
//     name: 'John Brown',
//     city: '太原',
//     intent: '大',
//     view: '美',
//     type: '礼品铁壶',
//     charge: '1000-80000',
//     num: '152345648456',
//     content:'awjdljalwjdilawjdlajwil122222222222222jdlajiddjwlid'
// }]


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
                            <Aboutus/>
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
