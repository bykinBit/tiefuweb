const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const nav=require('./nav.jsx');
import { Layout, Menu, Breadcrumb, Icon,Card ,Dropdown,Button,Upload,  Modal,Table,Popconfirm} from 'antd';
const { SubMenu } = Menu;
class Intention extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: '名字',
            dataIndex: 'name',
            width: '8%',
        }, {
            title: '地址',
            dataIndex: 'city',
            width: '10%',
        }, {
            title: '意向大小',
            dataIndex: 'intent',
            width: '8%',
        }, {
            title: '视觉取向',
            dataIndex: 'view',
            width: '8%',
        }, {
            title: '需求类型',
            dataIndex: 'type',
            width: '8%',
        }, {
            title: '预算范围',
            dataIndex: 'charge',
            width: '10%',
        }, {
            title: '电话',
            dataIndex: 'num',
            width: '10%',
        },{
            title: '留言',
            dataIndex: 'content',
            width: '30%',
        },{
            title: '删除',
            dataIndex: 'operation',
            width: '8%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ?
                        (
                            <Popconfirm title="确定要删除吗?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">删除</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state= {
            dataSource: [{
                key: '0',
                name: 'John Brown',
                city: '太原',
                intent: '大',
                view: '美',
                type: '礼品铁壶',
                charge: '1000-80000',
                num: '152345648456',
                content:'字字字字字sdfsdfs字字字字字'
            },{
                key: '1',
                name: 'John Brown',
                city: '太原',
                intent: '大',
                view: '美',
                type: '礼品铁壶',
                charge: '1000-80000',
                num: '152345648456',
                content:'awjdljalwjdilawjdlajwil122222222222222jdlajiddjwlid'
            }]
        };

    }
    onDelete  (index)  {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    };
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <Intention/>
    </nav.AppNav>
    , document.querySelector('#page'));
