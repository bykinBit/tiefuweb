const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const o=require('./wangEditor.jsx');
const nav = require('./nav.jsx');
import { Menu, Icon, Button, Card, Row, Input, Table, Popconfirm} from 'antd';
const {SubMenu} = Menu;
class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.check=this.check.bind(this);
        this.edit=this.edit.bind(this);
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    check(){
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit(){
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}
class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '电话',
            dataIndex: 'phone',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'phone')}
                />
            ),
        }, {
            title: '邮箱',
            dataIndex: 'email',
            width: '25%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'email')}
                />
            ),
        }, {
            title: '地址',
            dataIndex: 'address',
            width: '40%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'address')}
                />
            ),
        }, {
            title: '操作',
            dataIndex: 'operation',
            width: '10%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0?
                        (
                                <a href={`/admin/about_us/delete/${record.id}`}>Delete</a>
                        ) : null
                );
            },
        }];
        this.state = {
            dataSource: [{
                key: '',
                phone: '',
                email: '',
                address: '',
            }],
            count: 0,
        };
        this.onCellChange=this.onCellChange.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }
    onCellChange(index, key) {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({dataSource});
            const dataSources=dataSource[index];
            console.log(dataSources);
            fetch('/admin/about_us/update', {
                    method: 'POST',
                    // 让session生效
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataSources)
                }
            ).then((res)=>res.json()).then((data)=>{
                if(data=='ok'){
                    console.log('修改成功！');
                }
            })
        }
    }
    onDelete(index){
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    }
    handleAdd(){
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            phone: `Edward King ${count}`,
            email: '11458978912@163.com',
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
        fetch('/admin/about_us/add', {
                method: 'POST',
                // 让session生效
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res)=>res.json()).then((data)=>{
            if (data!== 'err') {
                alert('插入成功！');
            }
        })
    }
    componentDidMount() {
        fetch('/admin/about_us/all', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                dataSource: data,
                count:`${data.length}`
            });
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd} style={{width:'10%',background:'#108ee9',color:'#fff'}}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} pagination={{defaultCurrent:1,total:5,pageSize:3}}/>
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <EditableTable />
    </nav.AppNav>
    , document.querySelector('#page'));
