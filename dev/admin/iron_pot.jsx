const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const nav=require('./nav.jsx');
import {Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Card, Col, Row, Input, Select, Upload, Modal, message,Table, Popconfirm} from 'antd';
const {SubMenu} = Menu;
const InputGroup = Input.Group;
const Option = Select.Option;
const {Header, Content, Footer, Sider} = Layout;
class Ironpot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
        this.handleAdd=this.handleAdd.bind(this);
    }
    handleAdd(){
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
        console.log(2);
    };
    render() {
        return (
            <div>
                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                    <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                    <Card extra={<Icon type="close"/>}>
                        <div style={{background: '#ECECEC', padding: '0 30px'}}>
                            <Row type="flex" justify="start">
                                <Col span="16">
                                    <Card style={{}} bodyStyle={{padding: 0}}>
                                        <div className="custom-image" style={{float: 'left',width:'150px',height:'150px'}}>
                                            <Avatar style={{width:'150px',height:'150px'}}/>
                                        </div>

                                        <div className="custom-card" style={{float: 'left', paddingLeft: '0'}}>
                                            <h3 style={{float: 'left'}}>
                                                <App/>
                                            </h3>
                                            <p style={{float: 'left'}}>
                                                <Apps style={{float: 'left'}}/>
                                            </p>
                                            <p>
                                                <Appt/>
                                            </p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span="8">
                                    <Card style={{float: 'left'}} bodyStyle={{padding: 0}}>
                                        <div className="custom-card" style={{minHeight: 150}}>
                                            <R/>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div style={{background: '#ECECEC', padding: '20px'}}>
                            <Row>
                                <Col span="8">
                                    <Card title="铁壶设计风格" bordered={false}>
                                        <div style={{width:'100%',minHeight:'100px'}}>
                                            <PicturesWall/>
                                        </div>
                                        <div style={{width:'100%',minHeight:'150px'}}>
                                            <Appts style={{width:'100%'}}/>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span="8">
                                    <Card title="产品外观" bordered={false}>
                                        <div style={{width:'100%',minHeight:'100px'}}>
                                            <PicturesWall/>
                                        </div>
                                        <div style={{width:'100%',minHeight:'150px'}}>
                                            <Appts style={{width:'100%'}}/>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span="8">
                                    <Card title="技术研发" bordered={false}>
                                        <div style={{width:'100%',height:'100px'}}>
                                            <PicturesWall/>
                                        </div>
                                        <div style={{width:'100%',minHeight:'150px'}}>
                                            <Appts style={{width:'100%'}}/>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <EditableTable />
                </Content>
            </div>
        )
    }
}
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
class Avatar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(info){
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }

    render() {
        const imageUrl = this.state.imageUrl;
        return (
            <Upload
                className="avatar-uploader"
                name="avatar"
                showUploadList={false}
                action="/upload.do"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {
                    imageUrl ?
                        <img src={imageUrl} alt="" className="avatar" /> :
                        <Icon type="plus" className="avatar-uploader-trigger" />
                }
            </Upload>
        );
    }
}
class PicturesWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleCancel() {
        this.setState({previewVisible: false})
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange({fileList}) {
        this.setState({fileList})
    };

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="/upload.do"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        let ev = e || window.event;
        this.setState({userName: ev.target.value});
    }

    render() {
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="产品名称"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="inputName"
                style={{margin: '10px'}}
            />
        );
    }
}
class Apps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        let ev = e || window.event;
        this.setState({userName: ev.target.value});
    }

    render() {
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="产品英文名称"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="inputName"
                style={{margin: '10px'}}
            />
        );
    }
}
class Appt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        let ev = e || window.event;
        this.setState({userName: ev.target.value});
    }

    render() {
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="产品简介"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="inputName"
                style={{margin: '10px', resize: 'none', minWidth: 450, height: '90px'}}
                type='textarea'
            />
        );
    }
}
class Appts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = this.emitEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
    }

    emitEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        let ev = e || window.event;
        this.setState({userName: ev.target.value});
    }

    render() {
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty}/> : null;
        return (
            <Input
                placeholder="介绍"
                prefix={<Icon type="user"/>}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="inputName"
                style={{padding: '10px', resize: 'none', width: '100%', minHeight: '150px'}}
                type='textarea'
            />
        );
    }
}
class R extends React.Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        const Option = Select.Option;
        return (
            <div style={{background: '#ECECEC', padding: '20px'}}>
                <Row>
                    <Col span="8">
                        <Card title="是否展示" bordered={false} style={{width: 120, float: 'left'}}>
                            <Select defaultValue="不展示" style={{width: 100, paddingRight: 24}}
                                    onChange={this.props.handleChange}>
                                <Option value="0">不展示</Option>
                                <Option value="1">展示</Option>
                            </Select>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="栏目id" bordered={false} style={{width: 120, float: 'left'}}>
                            <Select defaultValue="经典铁壶" style={{width: 100, paddingRight: 24}}
                                    onChange={this.props.handleChange}>
                                <Option value="1">经典铁壶</Option>
                                <Option value="2">最新资讯</Option>
                            </Select>
                        </Card>
                    </Col>
                    <Col span="8">
                        <Card title="铁壶分类" bordered={false} style={{width: 120}}>
                            <Select defaultValue="经典铁壶" style={{width: 100, paddingRight: 24}}
                                    onChange={this.props.handleChange}>
                                <Option value="1">经典铁壶</Option>
                                <Option value="2">生肖铁壶</Option>
                                <Option value="3">铁器礼品</Option>
                                <Option value="4">精选礼品</Option>
                                <Option value="5">精湛工艺</Option>
                            </Select>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: false,
        };
        this.handleChange=this.handleChange.bind(this);
        this.check=this.check.bind(this);
        this.edit=this.edit.bind(this);
    }
    handleChange(e){
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
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'name')}
                />
            ),
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
        this.onCellChange=this.onCellChange.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }
    onCellChange(index, key){
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource });
        };
    };
    onDelete(index){
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    };
    handleAdd(){
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
ReactDOM.render(
    <nav.AppNav>
        <Ironpot/>
    </nav.AppNav>
    ,document.querySelector('#page'));