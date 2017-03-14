const React = require('react');
import {Layout, Menu, Breadcrumb, Icon,Dropdown,Button} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/admin/out">退出系统</a>
        </Menu.Item>
    </Menu>
);
class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        };
    }
    render() {
        const urlInfo = location.pathname.split('/');
        urlInfo.shift();
        const openKeys = [urlInfo.slice(0, 2).join('/')];
        if (location.pathname.indexOf('/admin/message') !== -1) {
            var selectKeys = [urlInfo.slice(0, 2).join('/')];
        } else {
            var selectKeys = [urlInfo.slice(0, urlInfo.length).join('/')];
        }
        return (
            <Layout>
                <Header className="header" theme="dark" style={{height: '80px',position:'relative'}}>
                    <div className="logo"/>
                    <div className="titlebox">铁府后台管理系统</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '80px', float: 'right'}}
                    >
                        <Menu.Item key="1">
                            <Dropdown overlay={menu} placement="bottomRight">
                                <Button>超级管理员</Button>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{padding: '0 24px', margin: 0, minHeight: 500}}>
                    <Sider width={200} style={{background: '#404040',paddingTop:'24px'}}
                    >
                        <Menu
                            style={{height:'100%'}}
                            theme="dark"
                            mode={this.state.mode}
                            defaultOpenKeys={openKeys}
                            defaultSelectedKeys={selectKeys}>
                            {/*<SubMenu*/}
                                {/*key="admin/user"*/}
                                {/*title={<span><Icon type="user"/><span className="nav-text">管理员</span></span>}*/}
                            {/*>*/}
                                {/*<Menu.Item key="admin/user/add"><a href="/admin/user/add">增加管理员</a></Menu.Item>*/}
                                {/*<Menu.Item key="admin/user/password"><a href="/admin/user/add">修改密码</a></Menu.Item>*/}
                            {/*</SubMenu>*/}
                            <SubMenu
                                key="admin/news"
                                title={<span><Icon type="team"/><span className="nav-text">新闻管理</span></span>}
                            >
                                <Menu.Item key="admin/news/list"><a href="/admin/news/list">新闻列表</a></Menu.Item>
                                {/*<Menu.Item key="admin/news/add"><a href="/admin/news/list">管理新闻</a></Menu.Item>*/}
                            </SubMenu>
                            {/*<SubMenu*/}
                                {/*key="admin/products"*/}
                                {/*title={<span><Icon type="trademark"/><span className="nav-text">产品管理</span></span>}*/}
                            {/*>*/}
                                {/*<Menu.Item key="admin/products/list"><a href="/admin/products/list">产品列表</a></Menu.Item>*/}
                                {/*<Menu.Item key="admin/products/add"><a href="/admin/products/list">管理产品</a></Menu.Item>*/}
                            {/*</SubMenu>*/}
                            <SubMenu
                                key="admin/designer"
                                title={<span><Icon type="user-add"/><span className="nav-text">设计师管理</span></span>}
                            >
                                <Menu.Item key="admin/designer/list"><a href="/admin/designer/list">设计师</a></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="admin/message">
                                <a href="/admin/message">
              <span>
                <Icon type="file"/>
                <span className="nav-text">留言管理</span>
              </span>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="admin/about_us">
                                <a href="/admin/about_us">
              <span>
                <Icon type="file"/>
                <span className="nav-text">关于我们</span>
              </span>
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '24px 24px 0'}}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 480}}>
                            <Breadcrumb style={{ margin: '12px 0' }}/>
                            {this.props.children}
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
exports.AppNav = Frame;