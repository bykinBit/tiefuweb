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


    onDelete  (index)  {
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
ReactDOM.render(
    <nav.AppNav>
        <Intention/>
    </nav.AppNav>
    , document.querySelector('#page'));