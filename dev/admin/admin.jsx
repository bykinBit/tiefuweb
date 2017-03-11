const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
import { Layout, Menu, Breadcrumb, Icon ,Dropdown,Button} from 'antd';
const { SubMenu } = Menu;
const { Header, Content,Footer, Sider } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">退出系统</a>
        </Menu.Item>
    </Menu>
);
class Frame extends React.Component{
    render(){
        return(
            <Layout>
                <Header className="header" theme="dark">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px',float:'right' }}
                    >
                        <Menu.Item key="1">
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button>超级管理员</Button>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{padding: '0 24px', margin: 0, minHeight: 500}}>
                    <Sider width={200} style={{ background: '#fff'}}>
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
                    <Layout style={{ padding: '24px 24px 0' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 480 }}>
                            <div style={{padding:'24px',width:'100%',height:'480px',textAlign:'center',lineHeight:'100%',fontSize:'40px',color:'#424eff',background:'url(/admin/images/apic23565.jpg) no-repeat center center',backgroundSize:'cover'}}>欢迎进入铁府后台管理系统</div>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Coptyright ©2017 Support by TieFu
                </Footer>
            </Layout>
        )
 }
}
class Admin extends React.Component{
    render(){
        return(
            <Frame/>
        )
    }
}
ReactDOM.render(<Admin/>,document.querySelector('#page'));
