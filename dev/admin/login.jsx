const React = require('react');
const ReactDOM = require('react-dom');
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var body = '';
                fetch('/login/check', {
                    method: 'post',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(values)
                })
                    .then((res) =>res.json())
                    .then((data) => {
                        if (data === 'ok') {
                            location.href = '/admin';
                        }
                    });
            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 600, margin: '0 auto'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input addonBefore={<Icon type="user"/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a>register now!</a>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class Page extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{padding: '40px 0'}}>
                        <WrappedNormalLoginForm/>
                    </Content>
                    <Footer><p style={{textAlign: 'center'}}>Copyright © 2017 tiefu Incorporated. All rights
                        reserved.</p></Footer>
                </Layout>
            </div>
        )
    }
}
ReactDOM.render(<Page/>, document.querySelector('#page'));