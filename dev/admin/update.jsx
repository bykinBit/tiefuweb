const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
import { Layout, Menu, Icon ,Dropdown,Button,Input,Form} from 'antd';

const FormItem = Form.Item;


const { SubMenu } = Menu;
const { Header, Content,Footer, Sider } = Layout;


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="localhost:3002/login">退出系统</a>
        </Menu.Item>
    </Menu>
);


// 登录管理

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var body='';
                for(var k in values){
                    body+=`${k}=${values[k]}&`;
                }
                fetch('/login/check',{
                    method:'post',
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body:body.slice(0,-1)
                })
                    .then((res)=>res.json())
                    .then((data)=>{
                        if(data==='ok'){
                            location.href='/admin';
                        }
                    });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width:200,margin:'100px auto'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input addonBefore={<Icon type="user" />}  placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Enter Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        确认修改
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


// 登录管理结束


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
                            <WrappedNormalLoginForm/>
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
