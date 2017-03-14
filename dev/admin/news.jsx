const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const wang = require('./wangEditor.jsx');
const nav = require('./nav.jsx');
import {Layout, Menu, Breadcrumb, Table, Input, Icon, Card, Dropdown, Button, Upload, Modal} from 'antd';
const {SubMenu} = Menu;
const fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
};

const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
};
class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: false,
            editorContent: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.check = this.check.bind(this);
        this.edit = this.edit.bind(this);
        this.aa = this.aa.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({value});
    }
    aa(x){
    console.log(x);
        const value =x;
        this.setState({value});
    }
    check() {
        this.setState({editable: false});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit() {
        this.setState({editable: true});
    }
    render() {
        const {value, editable} = this.state;
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
                            <wang.WangEditor url={'/admin/txt'} content={this.state.editorContent} save={this.aa}/>
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
        this.state = {
            dataSource: []
        }
        this.columns = [
            {
                title: '标题',
                dataIndex: 'title',
                width: '10%',
                render: (text, record, index) => (
                    <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'title')}
                    />
                ),

            },

            {
                title: '图片',
                dataIndex: 'img',
                width: '15%',
                render: (text, record, index) => (
                    // <Avatar />
                    <div>
                        <Upload {...props2}>
                            <Button>
                                <Icon type="upload"/> upload
                            </Button>
                        </Upload>
                    </div>
                ),
            }, {
                title: '内容',
                dataIndex: 'content',
                width: '40%',
                render: (text, record, index) => (
                    <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'content')}
                    />
                ),
            }, {
                title: '描述',
                dataIndex: 'describ',
                width: '30%',
                render: (text, record, index) => (
                    <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'describ')}
                    />
                ),
            }, {
                title: '删除',
                dataIndex: 'operation',
                width: '5%',
                render: (text, record, index) => {
                    return (
                        <a href={`/admin/news/delete/${record.id}`}>delete</a>
                    );
                },
            }];
        this.onCellChange = this.onCellChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

    }

    componentDidMount() {
        fetch('/admin/news/all', {
            credentials: 'same-origin'
        }).then((res) => res.json()).then((data) => {
            this.setState({
                dataSource: data
            });
        });
    }

    onCellChange(index, key) {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({dataSource});
            const dataSources = dataSource[index];
            fetch('/admin/news/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(dataSources)
            }).then((res) => res.json()).then((data) => {
                if (data !== 'err') {
                    alert('修改成功');
                }
            })
        };
    }

    onDelete(index) {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({dataSource});
    }

    handleAdd() {
        const {count, dataSource} = this.state;
        const newData = {
            id: count + 1,
            title: `Edward King ${count}`,
            content: '',
            key: count,
            name: `Edward King ${count}`,
            img: 32,
            describe: `${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
        fetch('/admin/news/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
        }).then((res) => res.json()).then((data) => {
            if (data !== 'err') {
                alert('插入成功');
            }
        })
    }

    render() {
        const {dataSource}  = this.state.dataSource;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table pagination={{pageSize:3,pageSizeOptions:['3'],defaultPageSize:3}} bordered dataSource={this.state.dataSource} columns={columns}/>
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <EditableTable/>
    </nav.AppNav>
    , document.querySelector('#page'));