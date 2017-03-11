const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const Common=require('./common.jsx');
class Banner extends React.Component{
    render(){
        return(
            <div className="d_banner">
                {/*<common.C nav={nav}/>*/}
            </div>
        )
    }
}
class Today extends React.Component{
    render(){
      var box=this.props.data.map((v,i)=>
    <div className="d_solid_position"  key={i}>
        <ul className="d_top_top"/>
        <ul className="d_bottom_left"/>
        <ul className="d_top_right"/>
        <ul className="d_bottom_right"/>
       <div className="d_hezi_more">
          <div className="d_sanbaer">
              <img src={v.url} alt=""/>
          </div>
          <div className="d_right_wanli">
              <img src={v.num} alt=""/>
              <h3>{v.title}</h3>
              <p>{v.content}</p>
              <a href={`${v.href}`}  className="d_cube_more">
                  MORE
              </a>
              <div className="d_watch">
                  <img src={v.img} alt=""/>
                  <span>{v.date}</span>
              </div>
          </div>
     </div>
  </div>);

        return(
            <div className="d_content">
                <div className="d_content_red"></div>
                <div className="d_index">
                    <a href={'/'}>首页</a>
                    <img src="/index/images/3_w.jpg" alt=""/>
                    <p>最新资讯</p>
                </div>
                <div className="d_information">
                    <img src="/index/images/4_w.jpg" alt=""/>
                </div>
                <div className="d_health">
                    <img src="/index/images/5_w.jpg" alt=""/>
                    <div className="d_jiantou">
                        <a href={'/news/1/1'}><img src="/index/images/23_w.png" alt=""/></a>
                    </div>
                    <div className="d_red_jiantou">
                        <a href={'/news/1/1'}><img src="/index/images/24_w.png" alt=""/></a>
                    </div>
                </div>
                <div className="d_more">
                    <img src="/index/images/6_w.jpg" alt=""/>
                </div>
                {box}
            </div>
        )
    }
}
var data=[
    {
        url:'/index/images/7_w.jpg',
        num:'/index/images/8_w.jpg',
        title:'万里荫城，日进斗金',
        content:'在上党地区有一句民谚：“万里荫城，日进斗金”。说的是长治县赫赫有名的“铁府荫城”。千百年来，铁货以“荫城著称”，而荫城又以“铁货闻名”。您能想象得到吗，荫城曾经是中国北方最大......',
        img:'/index/images/17_w.jpg',
        date:'2016-01-23',
        href:'/news/1/1'
    },
    {
        url:'/index/images/9_w.jpg',
        num:'/index/images/10_w.jpg',
        title:'九头十八将传奇',
        content:'九头十八匠”是明清时期山西省晋城市城区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经不只九头十八匠。为什么会有这么多以“头”“匠”为名的村落呢......',
        img:'/index/images/17_w.jpg',
        date:'2016-01-23',
        href:'/news/1/1'
    },
    {
        url:'/index/images/11_w.jpg',
        num:'/index/images/12_w.jpg',
        title:'铁心寻铁匠',
        content:'贾师傅年近古稀，仍然每天敲敲打打地做着他做了一辈子的菜刀。这是他家祖传的手艺，已经有几百年的历史。眼看贾师傅就要打不动了，却没有人能接过他的铁匠铺子。李洁，对打铁并没有童年记忆，更谈不上什么......',
        img:'/index/images/17_w.jpg',
        date:'2016-01-23',
        href:'/news/1/1'
    },
    {
        url:'/index/images/13_w.jpg',
        num:'/index/images/14_w.jpg',
        title:'铁壶！您真的了解吗',
        content:'近两年，铁壶在茶道爱好者中热传，渐成一种风尚。市场上铁壶的制式、款式日益丰富，开始令人眼花缭乱，加之从事铁壶制造和经销的店商一拥而起，价格越发悬殊，一把壶便宜的几百元，贵的数万元......',
        img:'/index/images/17_w.jpg',
        date:'2016-01-23',
        href:'/news/1/1'
    },
    {
        url:'/index/images/15_w.jpg',
        num:'/index/images/16_w.jpg',
        title:'葛水平：铁壶润水',
        content:'从前的沁河人家，火炉上整日都坐一壶水，壶是铁壶。壶里的水一早到晚都冒着青气，青气蒙在脸上，仿佛过日子的温暖。铁壶里的水大开时，本身就是激动，容不得你偷懒，铁壶挪开，一坨和好的稀煤糊进去，火口上半边火苗扰动.....',
        img:'/index/images/17_w.jpg',
        date:'2016-01-23',
        href:'/news/1/1'
    }
]

class Pages extends React.Component{
    constructor(props){
        super(props);
            this.state={
                num:2
        }
    }
    render(){
        var Pages=this.props.page.map((v,i)=><div key={i}><a href="javascript:;" className="d_ling_hui" onClick={()=>{this.setState({num:i})}} style={{background:(i===this.state.num)?'red':'#fff'}}>
            <span style={{color:(i===this.state.num)?'#fff':'#aeaeae'}}>{v.id}</span>
        </a>
        <div className="d_line" style={{display:(i===5)?'none':'block'}}></div>
            </div>)
        return(
            <div className="d_pages">
                <div className="d_page">
                    <a href="">
                        <img src="/index/images/18_w.jpg" alt=""/>
                    </a>
                    <img  style={{marginTop:8}} src="/index/images/19_w.jpg" alt=""/>
                    {Pages}
                    <img  style={{marginTop:8}} src="/index/images/20_w.jpg" alt=""/>
                    <a href="" >
                        <img style={{marginTop:6}} src="/index/images/21_w.jpg" alt=""/>
                    </a>
                </div>
                <div className="d_First_page">
                    <div className="d_first">
                        <ul className="d_together">共10页</ul>
                        <ul className="d_other_page">
                            <span>到</span>
                            <a><input type="text"/></a>
                            <span>页</span>
                        </ul>
                        <ul ><a className="d_go" href="">GO</a></ul>
                    </div>
                </div>
            </div>

        )
    }
}
const page=[
    {id:'01'},
    {id:'02'},
    {id:'03'},
    {id:'....'},
    {id:'05'},
    {id:'06'},
];

class Perfect extends React.Component{
    render(){
        return(
            <div>
                <Common.Nav data={nav}/>
                <Banner/>
                <Today data={data}/>
                <Pages page={page}/>
                <Common.Footer/>
            </div>

        )
    }
}
const nav = [
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
ReactDOM.render(<Perfect/>,document.getElementById('page'));