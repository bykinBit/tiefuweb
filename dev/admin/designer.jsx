const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
import { Layout, Menu, Icon ,Dropdown,Form,Table, Input, Button, Popconfirm, Upload,  message} from 'antd';

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
//上传图片结束


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
                            <EditableTable />
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

// dataSource:[{
//     key:'0',
//     name:'Edward King',
//     describe:'公司文化:公司以“专注网站,用心服务”为核心价值,一切以用户需求为中心,希望通过专业水平和不懈努力,重塑企业网络形象',
//     img:'1.png'
// },{
//     key:'1',
//     name:'Edward 2',
//     describe:'为企业产品推广文化发展提供服务指导;塑企业网络形象,为企业产品推广文化发展提供塑企业网络形象,为企业产品推广文化发展提供',
//     img:'2.png'
// }],