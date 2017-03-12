const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const nav = require('./nav.jsx');
import { Menu, Icon, Button, Card, Row, Input, Table, Popconfirm} from 'antd';
const {SubMenu} = Menu;
class Aboutus extends React.Component {
    render() {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}}>
                <Button type="primary">完成</Button>
                <Row>
                    <Card title="地址" bordered={false}>
                        <Input placeholder="公司联系地址"/>
                    </Card>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Card title="邮箱" bordered={false}>
                        <Input placeholder="公司联系邮箱"/>
                    </Card>
                </Row>
                <Row style={{marginTop: '30px'}}>
                    <Card title="电话" bordered={false}>
                        <Input placeholder="公司联系电话"/>
                    </Card>
                </Row>
            </div>
        )
    }
}
ReactDOM.render(
    <nav.AppNav>
        <Aboutus/>
    </nav.AppNav>
    , document.querySelector('#page'));
