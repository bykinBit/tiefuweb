const React=require('react');
const ReactDOM=require('react-dom');
const path=require('path');
const Common=require('./common.jsx');

class Details extends React.Component{
    constructor(props){
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.state={
            index:0,
            title:''
        }
    }
    prev(){
        const len=this.props.data.length;
        this.setState((ps)=>({index:(ps.index-1)<0?0:(ps.index-1)})
        )
    }
    next(){
        const len=this.props.data.length;
        this.setState((ps)=>({index:(ps.index+1)>len-1?(len-1):(ps.index+1)})
        )

    }
 render(){

     const content=this.props.data.map((v,i)=><div className="posi_zxd"
          style={{display:(i===this.state.index)?'block':'none'}} key={i}>
             <b>{this.setState.title=v.title}</b>
             <i>{v.date}</i>
             <div className="diyi_zxd">
                 <p >{v.par1}</p>
                 <p className="dis_zxd">{v.par2}</p>
                 <p className="dis_zxd">{v.par3}</p>
             </div>
             <div className="pic1_zxd"><img src={v.pic1} alt=""/></div>
             <div className="dier_zxd">
                 <p className="dis_zxd">{v.par4}</p>
                 <p className="dis_zxd">{v.par5}</p>
                 <p className="dis_zxd">{v.par6}</p>
                 <p className="dis_zxd">{v.par7}</p>
             </div>
             <div className="pic1_zxd"><img src={v.pic2} alt=""/></div>
             <div className="dier_zxd">
                 <p className="dis_zxd">{v.par8}</p>
                 <p className="dis_zxd">{v.par9}</p>
                 <p className="dis_zxd">{v.par10}</p>
             </div>

         </div>
     );
     return(
         <div>

             <div className="banner_zxd">
                 <Common.Nav data={nav}/>
             </div>
             <div className="hezi_zxd">
                 <div className="centerbox_zxd">
                    <div className="xiantiao_zxd"></div>

                     <div className="crumbs">
                      <i>首页</i>
                      <span>></span>
                      <p>最新资讯</p>
                      <span>></span>
                      <em className="fenyename_zxd">{this.state.title}</em>
                     </div>
                     {content}
                     <div className="xuanze_zxd">
                       <div className="shang_zxd" onClick={this.prev}>
                           <p>上一篇</p>
                           <i>:</i>
                           <span>万里萌城 日进金斗</span>
                       </div>
                         <div onClick={this.next} className="xia_zxd">
                             <p >下一篇 </p>
                             <i>:</i>
                             <span>铁心寻铁医</span>
                         </div>
                     </div>

                 </div>
             </div>
         <Common.Footer />
         </div>

     )
 };
};
var data=[
    {title:'九头十八匠传奇',date:'2016.12.12',
        par1:`头窑头岗头花园头，吕匠侯匠金匠和马匠。`,
        par2:`“九头十八匠”是明清时期山西省晋城市城区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经不只九头十八匠。为什么会有这么多以“头”“匠”为名的村落呢？`,
        par3:`在金代，泽州是金国经济最富庶的地区之一，也是金国与南宋军事对峙的前沿阵地，为了保证战争对铁制兵器的需要，金国将各地的匠人征召来泽州，在这里设立了头下军州。大元帝国与南宋对峙时，泽州又成了元与南宋交战的前沿阵地，元代继承了金代的头下军州制度，建立了匠户制度，由此形成了晋城的九头十八匠。九头十八匠对泽州铁器手工业的发展影响深远。旷日持久的战争促进了泽州冶铸工艺的成熟，由此产生了匠村。`,
        pic1:"/index/images/6_zxd.png",
        par4:`有这样一副对联：冯吕苗郜夏马牛；孔申司孟谢武侯。横批：金江郝段。`,
        par5:`对联中的字全用姓氏连缀，每一个字又代表了一个村落。这是十八个以“匠”为名的村庄。`,
        par6:`透过历史的尘埃，不难窥见当时人们以家族和职业为中心在一起生活生产的史实。如此众多匠村的出现，标志着泽州冶铸体系的完善和兴盛。千千万万的匠人，写就了风云跌宕的泽州工匠传奇。`,
        par7:`相府铁器传承古泽州冶铸技艺，让散落在泽州大地的民间手艺人，重拾“九头十八匠”匠人的自信，恢复传统，创新工艺，设计为王，打造着新时代的泽州铁器。相府铁器传承古泽州冶铸技艺，让散落在泽州大地的民间手艺人`,pic2:"/index/images/7_zxd.png",
        par8:`和我们生活息息相关的不外乎就是衣、食、住、行。制作衣服的很多工具、器具是用铁制做的，比如缝纫用的针，我们现在叫钢针，以前叫铁针，别小看这个针，它要经过多少道工序才能够达到比较好的使用效果，这也需要一个高超的技术。还有熨铁，这个我们早在唐代这些东西都已经采用了。`,
        par9:`说到食，炊具、食具当中，恐怕最有名的就是铁锅。有学者说过，咱们的中华的烹饪技术完全可以称得上一大发明。在烹饪技术当中，其实铁锅的作用非常了得。明清时期，中国对南洋等一些地方的贸易最大宗的就是铁锅，当然还有其他的像铁铲子、铁勺甚至菜刀等等，都是和我们悠久的用铁文化分不开的。`,
        par10:`在住房、建筑方面，也有很多关键的部位，结构件开始使用铁制品。行的方面也可以举出几例。比如我们都知道的赵州桥是中国古代石拱桥的一个优秀的代表，在赵州桥我们注意到它很多石头、石块之间连接的部件，其实大量地使用了铸铁，及其铸铁制成的钢。`},
    {title:'铁心寻铁医',date:'2016.12.12',
        par1:`头窑头岗头花园头，吕匠侯匠金匠和马匠。`,
        par2:`“九头十八匠”是明清时期山西省晋城市城区（当时为泽州府府治所）附近一些带“头”和“匠”的村名的统称，演变到今天早已经不只九头十八匠。为什么会有这么多以“头”“匠”为名的村落呢？`,
        par3:`在金代，泽州是金国经济最富庶的地区之一，也是金国与南宋军事对峙的前沿阵地，为了保证战争对铁制兵器的需要，金国将各地的匠人征召来泽州，在这里设立了头下军州。大元帝国与南宋对峙时，泽州又成了元与南宋交战的前沿阵地，元代继承了金代的头下军州制度，建立了匠户制度，由此形成了晋城的九头十八匠。九头十八匠对泽州铁器手工业的发展影响深远。旷日持久的战争促进了泽州冶铸工艺的成熟，由此产生了匠村。`,
        pic1:"/index/images/6_zxd.png",
        par4:`有这样一副对联：冯吕苗郜夏马牛；孔申司孟谢武侯。横批：金江郝段。`,
        par5:`对联中的字全用姓氏连缀，每一个字又代表了一个村落。这是十八个以“匠”为名的村庄。`,
        par6:`透过历史的尘埃，不难窥见当时人们以家族和职业为中心在一起生活生产的史实。如此众多匠村的出现，标志着泽州冶铸体系的完善和兴盛。千千万万的匠人，写就了风云跌宕的泽州工匠传奇。`,
        par7:`相府铁器传承古泽州冶铸技艺，让散落在泽州大地的民间手艺人，重拾“九头十八匠”匠人的自信，恢复传统，创新工艺，设计为王，打造着新时代的泽州铁器。相府铁器传承古泽州冶铸技艺，让散落在泽州大地的民间手艺人`,pic2:"/index/images/7_zxd.png",
        par8:`和我们生活息息相关的不外乎就是衣、食、住、行。制作衣服的很多工具、器具是用铁制做的，比如缝纫用的针，我们现在叫钢针，以前叫铁针，别小看这个针，它要经过多少道工序才能够达到比较好的使用效果，这也需要一个高超的技术。还有熨铁，这个我们早在唐代这些东西都已经采用了。`,
        par9:`说到食，炊具、食具当中，恐怕最有名的就是铁锅。有学者说过，咱们的中华的烹饪技术完全可以称得上一大发明。在烹饪技术当中，其实铁锅的作用非常了得。明清时期，中国对南洋等一些地方的贸易最大宗的就是铁锅，当然还有其他的像铁铲子、铁勺甚至菜刀等等，都是和我们悠久的用铁文化分不开的。`,
        par10:`在住房、建筑方面，也有很多关键的部位，结构件开始使用铁制品。行的方面也可以举出几例。比如我们都知道的赵州桥是中国古代石拱桥的一个优秀的代表，在赵州桥我们注意到它很多石头、石块之间连接的部件，其实大量地使用了铸铁，及其铸铁制成的钢。`}
    ];
const nav = [
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
ReactDOM.render(<Details data={data}/>,document.getElementById('details'));

