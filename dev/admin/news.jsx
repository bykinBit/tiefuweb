const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
import { Layout, Menu, Breadcrumb, Icon,Card ,Dropdown,Button,Upload,  Modal} from 'antd';
const { SubMenu } = Menu;
const { Header, Content,Footer, Sider } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">退出系统</a>
        </Menu.Item>
    </Menu>
);
// class Dropdowns extends React.Component{
//     render(){
//         return(
//             <div>
//
//             </div>
//         )
//     }
// }
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
                            <News/>
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



class PicturesWall extends React.Component {
    constructor(props){
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
        this.handleCancel=this.handleCancel.bind(this);
        this.handlePreview=this.handlePreview.bind(this);
    };
    handleCancel  ()  {this.setState({ previewVisible: false })};

    handlePreview  (file)  {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };
    handleChange({ fileList })  {this.setState({ fileList })}


    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
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
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
};
class News extends React.Component {
    render() {
        return (
            <div className="box" style={{width: 900, height: 1000, padding: '30'}}>
                <div className="top" style={{width:100,height:100}}>
                    <Button type="primary" style={{width:80,height:80}}><Icon type="plus" style={{fontSize:40,cursor:'pointer',color:'#ffffff'}}/></Button>

                </div>
                <Card title="1" style={{width: 300}} extra={<a href="#"><Icon type="close"/></a>}>
                    <div className="custom-image">
                        <PicturesWall />
                    </div>
                    <div className="custom-card">
                        <h3 style={{textAlign: 'center'}}>
                            中国人
                        </h3>
                        <p>
                            描述：
                        </p>
                        <p style={{paddingBottom: 20}}>
                            <textarea name="" id="" cols="39" rows="5" style={{resize: 'none'}}
                                      wrap="PHYSICAL"></textarea>
                        </p>
                        <p>
                            content:
                        </p>
                        <p>
                            <textarea name="" id="" cols="39" rows="5" style={{resize: 'none'}}></textarea>
                        </p>
                    </div>
                </Card>
            </div>
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
