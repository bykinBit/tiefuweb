const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const nav=require('./nav.jsx');
import { Layout, Menu, Icon ,Dropdown,Form,Table, Input, Button, Popconfirm, Upload,  message} from 'antd';

const FormItem = Form.Item;


const { SubMenu } = Menu;

// 图片框
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


    handleChange(info) {
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
                action="/admin/upload"
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
//上传图片
class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: this.props.value,
            editable: false,
        }
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
            title: 'img',
            dataIndex: 'img',
            width: '20%',
            render: (text, record, index) => (
                <Avatar />
            ),
        }, {
            title: 'name',
            dataIndex: 'name',
            width: '20%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'name')}
                />
            ),
        }, {
            title: 'describe',
            dataIndex: 'describe',
            width:'40%',
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'describe')}
                />
            ),
        }, {
            title: 'operation',
            dataIndex: 'operation',
            width:'20%',
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
                img: '32',
                describe: '公司文化:公司以“专注网站,用心服务”为核心价值,一切以用户需求为中心,希望通过专业水平和不懈努力,重塑企业网络形象公司文化:公司以“专注网站,用心服务”为核心价值,一切以用户需求为中心,希望通过专业水平和不懈努力,重塑企业网络形象',
            }, {
                key: '1',
                name: 'Edward King 1',
                img: '31',
                describe: '公司文化:公司以“专注网站,用心服务”为核心价值,一切以用户需求为中心,希望通过专业水平和不懈努力,重塑企业网络形象',
            }],
            count: 2,
        };
        this.onCellChange=this.onCellChange.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);

    }
    onCellChange (index, key){
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource });
        };
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
            name: `Edward King ${count}`,
            img: 32,
            describe: `${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
//上传图片结
ReactDOM.render(
    <nav.AppNav>
        <EditableTable />
</nav.AppNav>
    ,document.querySelector('#page'));