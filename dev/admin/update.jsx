const React=require('react');
const ReactDOM=require('react-dom');
const nav=require('./nav.jsx');
const path=require('path');
import { Layout, Menu, Breadcrumb, Icon,Card ,Dropdown,Button,Upload, Modal,Form,Input} from 'antd';
const { SubMenu } = Menu;
const FormItem=Form.Item;
const { Header, Content,Footer, Sider } = Layout;
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
ReactDOM.render(
    <nav.AppNav>
        <WrappedNormalLoginForm/>
    </nav.AppNav>
    , document.querySelector('#page'));
