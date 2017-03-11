const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
const common = require('./common.jsx');
class Cic extends React.Component {
    render() {
        return (
            <div className="banner_g">
                <div className="banner_gzl">
                    <common.Nav data={nav}/>
                </div>
            </div>
        )
    }
}

class Cics extends React.Component {
    render() {
        const opop = this.props.data.map((v, i) =>
            <div className="g_boxbox" key={i}>
                <div className="g_titles_one">
                    <div className="g_top_title">
                        <h1>{v.title}</h1>
                    </div>
                    <div className="g_usa">{v.eeee}</div>
                    <div className="g_wenzi">
                        <p>{v.wenzi}</p>
                        <p className="g_title_two">{v.wenzi2}</p>
                        <p className="g_title_usas">{v.usa}</p>
                        <p className="g_title_usas">{v.usa2}</p>
                    </div>
                </div>
                <div className="g_imgs">
                    <img src={v.img} alt=""/>
                </div>
            </div>);
        return (
            <div className="g_Cics">
                <div className="g_xian"></div>
                <div className="g_mbx">
                    <span><a href={'/'}>首页</a></span>
                    <p></p>
                    <a href="" className="g_blod">铸铁文化</a>
                </div>
                <div className="g_top"></div>
                <div className="g_tiger"></div>
                {opop}

            </div>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <div>
                <Cic/>
                <Cics data={data}/>
                <common.Footer/>
            </div>
        )
    }

}
var data = [
    {
        title: '中国铸铁的起源',
        eeee: 'The origin of the Chinese cast iron',
        wenzi: '人类最早使用的天然金属铁是陨铁，其成分主要是由铁镍合金组成。在人工冶铁术发明之前，中国人已懂得利用天然的陨铁来制造工具。目前已发现公元前14世纪至公元前9世纪的陨铁制品。可见当时铁的珍贵与人们对铁和青铜两种金属材料不同性能的深刻认识。',
        wenzi2: '大约在公元前5世纪，甚至更早，中国人发明了铸铁，并且在随后的时间里，把铸铁脱碳成钢。为什么铸铁单单在中国发明，而没在西方？其实在中国最关键的是出现了一个铸铁的韧化技术。就是说原来的铸铁是脆硬的，经过一系列的热处理加工以后，才变成韧性铸铁，这样才真正具有了实用的价值。在中国春秋战国时期，青铜文明已经发展到一定的程度，人们常用青铜来铸造各种礼器。在各种青铜器的铸造技术成熟后，随着人口的增加，农业需要大力地发展，在这个背景下，铸铁及其韧化的铸铁也就应运而生了。',
        usa: ' The first to use human natural metallic iron is aerosiderite, its composition is mainly composed of iron nickel alloy.Before the invention of artificial iron smelting operation, the Chinese people have learned the use of natural meteoric iron to make tools.Has now been found in the 14th century BC to the 9th century BC corrugated iron products.Visible when iron precious and people to the iron and bronze deep understanding of two different kinds of metal material performance.',
        usa2: 'Around the 5th century BC, or even earlier, the Chinese invented the cast iron, and in the later time, the cast iron decarbonization Angle.Why iron invented in China alone, but not in the west?In fact, in China the most critical is the emergence of a toughening technology of cast iron.That is to say the original cast iron is rigid, after a series of heat treatment processing, became ductile cast iron, this really has the practical value.In China the spring and autumn period and the warring states period, bronze civilization has developed to a certain degree, people often use bronze to casting various sacrificial vessel.In all kinds of bronze casting technology mature, with the increase of population, agriculture needs efforts to developing, in this context, cast iron and cast iron also arises at the historic moment of toughening.',
        img: '/index/images/g_005.png'
    },
    {
        title: '铸铁对中华农耕文明产生的影响',
        eeee: 'Cast iron on the impact of Chinese farming civilization',
        wenzi: '中华的农耕文明更早的时间可能追溯到新石器时期，当时可以说刀耕火种用石器来做耕作的工具。到青铜时代，青铜工具的使用，也能运用在农业生产当中。但是我们注意到，实际上在中国，青铜时代真正拿青铜作为农具大量使用是非常少见的，而我们看见的大量的青铜器多是礼器、祭祀器物这些居多。，铁器的出现促进了农业生产的发展。铸铁制作的各种各样的农具，有初耕的、中耕的、还有播种的、收割的等等，用铸铁及其铸铁制成钢的这些产品，生产出来大量的农具。',
        wenzi2: ' 另一方面，铸铁作为农具主要有以下几个方面的好处。一个是它性能上优越，首先铸铁它的硬度高强度大。第二，铸铁的生产效3+率比较高。因为块炼铁的技术，是一个固态炼铁，经过不断地敲打锤炼，最后它也能成钢成铁。但是块炼铁的生产效率大大地低于铸铁。',
        usa: ' The earlier time of farming civilization may be traced back to the neolithic period, the plantation can use the stone to do farming tools.To the Bronze Age, the bronze tool use, also can use in agricultural production.But we noticed that, in fact, in China, taking bronze used as tools of Bronze Age really is very rare, and we see is more than a large number of bronze ritual vessels, implements the majority., the presence of iron will promote the development of agricultural production.Cast iron produced by a variety of tools and have the plow, at the beginning of the row, and planting, harvesting, etc., these products are made from cast iron and cast steel, produced a lot of farm tool',
        usa2: 'Cast iron as tools, on the other hand, the benefits of basically has the following several aspects.One is on its performance is superior, the first it has a high strength cast iron.Second, the cast iron production with high efficiency.Because of ironmaking technology is a solid iron, after constantly tapping temper, finally it can also produce iron.But the piece of ironmaking production efficiency is greatly lower than the cast iron.',
        img: '/index/images/g_006.png'
    }
]


const nav=[
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];




ReactDOM.render(<B />, document.getElementById('page'));