const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const common=require('./common.jsx');
//banner
class Img extends React.Component{
    render(){
        return(
            <div className={`${this.props.isActive? 'slides toum1':'slides toum'}`} >
                <img src={`${this.props.img}`} alt=""/>
            </div>
        )
    }
}

class Btn extends React.Component{
    render(){
        return(
            <div className={`${this.props.isActive? 'btn1':'btn'}`}  onClick={()=>{this.props.click(this.props.index)}}></div>
        )
    }
}

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.click =this.click.bind(this);
    }
    componentDidMount(){
        this.timeid=setInterval(()=>{
            var v=this.state.index+1;
            if(v>2){
                this.setState({
                    index:0
                })
            }else {
                this.setState({
                    index: v
                })
            }
        },3000)
    }


    prev(){
        const len=this.props.banner.length;
        clearInterval(this.timeid);
        this.setState((ps)=>
            ({index:(ps.index-1<0)?(len-1):(ps.index-1)}))
    }
    next(){
        const len=this.props.banner.length;
        clearInterval(this.timeid);
        this.setState((ps)=>
            ({index:(ps.index+1>=len)?0:(ps.index+1)}))
    }
    click(id){
        this.setState((ps)=>({index:id}))
    }
    render() {
        var Items= this.props.banner.map((v,i)=>
            <Img key={i} isActive={i===this.state.index} img={v.img} />
        );
        var Btns = this.props.banner.map((v,i)=>
            <Btn key={i} isActive={i===this.state.index} index={i} click={this.click}/>
        );
        return (
            <div className="banner">

                <div className="bannerbox">
                    <common.Nav data={nav}/>

                    <div className="imgbox"  style={{opacity:1}}>

                        {Items}
                    </div>
                    <div className="btns">
                        {Btns}
                    </div>
                    <div className="bannerleft" onClick={this.prev}> &lt; </div>
                    <div className="bannerright" onClick={this.next}> &gt; </div>
                </div>
            </div>
        )
    }
}

//经典铁壶
class Classic extends React.Component {
    render() {
        return (
            <div className="classic-jby">
                <div className="classicin-jby">
                    <div className="topbox-jby">
                        <img src="/index/images/1-jby.png" alt=""/>
                    </div>
                    <div className="botbox-jby">
                        <div className="inner-jby">
                            <div className="innertop-jby">
                                <div className="left-jby">
                                    <img src="/index/images/2-jby.png" alt=""/>
                                </div>
                                <div className="right-jby">
                                    <div className="rightintop-jby">
                                        <p className="ritop-jby">铁器／感受坚强的味道</p>
                                        <p className="ribot-jby"> IRONWARE/FEEL THE STRONG FLAVOR</p>
                                    </div>
                                    <div className="rightinbott-jby">
                                        <div className="rightinle-jby">
                                            <img src="/index/images/3-jby.png" alt=""/>
                                        </div>
                                        <div className="rightinri-jby">
                                            <a href={'/product'} className="btn-jby">&#xe6a1;</a>
                                            <div className="descri-jby">
                                                <p className="ritop-jby">白化铁器工艺盘</p>
                                                <p className="ribot-jby">  PLATEWHITE IRON PLATE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="innerbot-jby">
                                <div className="left-jby">
                                    <div className="leintop-jby">
                                        <p className="ribot-jby"> IRONWARE/FEEL THE STRONG FLAVOR</p>
                                        <p className="ritop-jby">铁器／感受坚强的味道</p>
                                    </div>
                                    <div className="leinbot-jby">
                                        <div className="bigpic-jby">
                                            <img src="/index/images/5-jby.png" alt=""/>
                                        </div>
                                        <div className="btnbox-jby">
                                            <a href={'/product'} className="btn-jby">&#xe6a1;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-jby">
                                    <img src="/index/images/6-jby.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//铁府文化
class H extends React.Component{
    render(){
        var Pic=this.props.picture.map((v,i)=> <div className="d_margin" key={i}>
            <div className="d_pic">
                <img src={v.s} alt=""/>
            </div>
            <div className="d_right">
                <img src={v.r} alt=""/>
                <div className="d_red_line"></div>
                <div className="d_line"></div>
                <div className="d_right_top">
                    <div className="d_red_cube"></div>
                    <div className="d_lin_red"></div>
                    <div className="d_red_right"></div>
                    <div className="d_top_red"></div>
                    <div className="d_bottom_red"></div>
                    <p>{v.p}</p>
                    <span>{v.span} </span>
                    <b>{v.b}</b>
                    <i>{v.i}</i>
                </div>
                <a href={'/culture'} className="d_red_more">MORE</a>
            </div>
        </div>);
        return(
            <div className="d_culture">
                {Pic}
            </div>
        )
    }
}
//礼品
class Good extends React.Component{
    render(){
        return(
            <div className="g_header">
                <div className="g_header_box">
                    <div className="g_logo">
                        <img src="/index/images/1_g.png" alt=""/>
                    </div>
                    <div className="g_red_xian"></div>
                    <div className="g_red_bot">
                        <img src="/index/images/3_g.png" alt=""/>
                    </div>
                    <div className="g_right">
                        <div className="g_right_one">
                            <img src="/index/images/4_g.png" alt=""/>
                        </div>
                        <div className="g_right_two">
                            <img src="/index/images/5_g.png" alt=""/>
                        </div>
                        <div className="g_jt_box">
                            <a href={'/product'}>
                                <div className="g_jt"></div>
                            </a>
                        </div>
                        <div className="g_last">
                            <img src="/index/images/7_g.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//trust
class Trust extends React.Component{


    render(){
        return(
            <div>
                <div className="trust">
                    <div className="zhezhao">
                        <div className="logo_trust"></div>
                    </div>

                </div>

            </div>
        )
    }
}
//news
class New_zxd extends React.Component {
    render() {
        const neirong = this.props.data.map((v, i) =>
            <a href={`${v.href}`}>
                <div className={ `${(i>0)?'showtop_zxd show_zxd':'show_zxd'}`} key={i}>
                    <div className={ `${(i===1)?'left_zxd rightfont_zxd':'left_zxd'}`}>
                        <div className="title_zxd">{v.title}</div>
                        <div className="browse_zxd">
                            <p>{v.date}</p>
                            <img className="date_zxd" src={v.pic2} alt=""/>
                            <span>{v.number}</span>
                            <img className="number_zxd" src={v.pic3} alt=""/>
                        </div>
                        <div className="explain_zxd">
                            <p>{v.content1}</p>
                            <span>{v.content2}</span>
                            <span className={ `${(i===1)?'zuo_zxd':''}`}>{v.content3}</span>
                        </div>
                    </div>
                    <div className= { `${(i===1)?'right_zxd leftimg_zxd':'right_zxd'}`}>
                        <div className="whiteline_zxd"></div>
                        <img src={v.pic1} alt=""/>
                    </div>
                </div>
            </a>
        )
        return (
            <div className="box_zxd">
                <div className="container_zxd">
                    <div className="zuixin_zxd">
                        <div className="font_zxd">最新资料</div>
                        <div className="lines_zxd"></div>
                        <div className="yingwen_zxd">latest news</div>
                    </div>
                    <div className="product_zxd" >
                        {neirong}
                    </div>
                </div>
            </div>


        )
    }
}
class Index extends React.Component{
    render(){
        return(
            <div>
                <Banner banner={banner}/>

                <Classic/>

                <H picture={picture}/>
                <Good/>
                <Trust/>
                <New_zxd data={data}/>
                <common.Footer/>
            </div>
        )

    }
}

const banner=[
    {id:1,img:'/index/images/banner1.png'},
    {id:2,img:'/index/images/banner2.png'},
    {id:3,img:'/index/images/banner3.png'}
];


const picture=[
    {
        s:'/index/images/1_w.jpg',
        r:'/index/images/2_w.png',
        p:'沁河是山西第二大河，泽州境内河床盛产砂铁盛产砂铁。',
        span:'砂铁壶质量更轻巧较普通铸铁重量要轻近一半，外观很漂亮、不易锈，锈易除、密度高砂铁的孔隙度非常细致，连锈也无法进入它的结构，因而，使用砂铁制作的铁壶不易生锈。',
        b:'沁河是山西第二大河，泽州境内河床盛产砂铁盛产砂铁。砂铁壶质量更轻巧较普通铸铁重量。',
        i:'要轻近一半，外观很漂亮、不易锈，锈易除、密度高砂铁的孔隙度非常细致，连锈也无法进入它的结构。'
    }
];
var data = [
    {
        title: '九头十八匠传奇',
        number: '2368',
        date: '2016-08-26',
        content1: `道头窑头岗头花园头，吕匠侯匠金匠和马匠。“九头十八匠”是明清时期山西 省晋城市城`,
        content2: `区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经`,
        content3: `不只九头十八匠。为什么会... `,
        pic1: '/index/images/1_zxd.png',
        pic2: '/index/images/5_zxd.png',
        pic3: '/index/images/4_zxd.png',
        href:'news/1/1'
    },
    {
        title: '葛水平：铁壶润水',
        number: '2368',
        date: '2016-08-26',
        content1: `道头窑头岗头花园头，吕匠侯匠金匠和马匠。“九头十八匠”是明清时期山西 省晋城市城`,
        content2: `区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经`,
        content3: `不只九头十八匠。为什么会... `,
        pic1: '/index/images/2_zxd.png',
        pic2: '/index/images/5_zxd.png',
        pic3: '/index/images/4_zxd.png',
        href:'news/1/1'
    },
    {
        title: '铁壶保养工艺',
        number: '2368',
        date: '2016-08-26',
        content1: `道头窑头岗头花园头，吕匠侯匠金匠和马匠。“九头十八匠”是明清时期山西 省晋城市城`,
        content2: `区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经`,
        content3: `不只九头十八匠。为什么会... `,
        pic1: '/index/images/3_zxd.png',
        pic2: '/index/images/5_zxd.png',
        pic3: '/index/images/4_zxd.png',
        href:'news/1/1'
    }




];
const nav=[
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
ReactDOM.render(<Index/>,document.getElementById('index'));