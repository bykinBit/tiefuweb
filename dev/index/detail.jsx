const React = require('react');
const ReactDOM = require('react-dom');
const Common=require('./common.jsx');

// 面包屑
class Bread extends React.Component {
    render() {
        return (
            <a href="javascript:;">{`${this.props.line}`} > </a>
        )
    }
}

// 标题
class Rabitt extends React.Component {
    render() {
        return (
            <div className="rabitt">
                <div className="black">
                    {`${this.props.content}`}
                </div>
                <div className="contime">
                    <div className="dian"></div>
                    <span>2016-09-10</span>
                </div>
                <div className="suger">
                    RABITT BLACK
                    <span>SUGER CAKE</span>
                </div>
            </div>
        )
    }
}
// 产品设计师
class Designer extends React.Component {
    render() {
        return (
            <div className="desbox">
                <div className="touxiang"></div>
                <div className="sheji">
                    <span>DESIGNER</span>
                    <p>产品设计师</p>
                    <div className="sun">SUN <i>FEI</i></div>
                    <div className="rightx"></div>
                </div>
                <div className="culture">
                    {`${this.props.content}`}
                </div>
            </div>
        )
    }
}

class Stepone extends React.Component {
    render() {
        return (
            <div className="steppic1">
                <div className="stepone1">
                    <div className="steptop1"><img src={`${this.props.stepone1}`} alt=""/></div>
                    <div className="bsl_stepr">
                        <img src="/index/images/step01.png" alt=""/>
                        <div className="desfen">
                            铁壶设计风格
                        </div>
                        <ul>
                            <li>炉火上生成的、历史悠久古</li>
                            <li>文化氛围深厚</li>
                            <li>环境中提供沉浸感觉的技术</li>
                        </ul>
                    </div>
                    <div><img src={`${this.props.stepone2}`} alt=""/></div>
                </div>
            </div>
        )
    }
}
class Steptwo extends React.Component {
    render() {
        return (
            <div className="steppic2">
                <div className="steptwo1">
                    <img className="step02" src="/index/images/step02.png" alt=""/>
                    <div className="chanpin">
                        <div className="waiguan">
                            产品外观
                        </div>
                        <ul>
                            <li>炉火上生成的、历史悠久古文化氛围深厚</li>
                            <li>环境中提供沉浸感觉的技术</li>
                            <li>炉火上生成的、历史悠久古文化氛围深厚环境中提供沉浸感觉的技术</li>
                        </ul>
                    </div>
                </div>
                <div className="twopic1">
                    <img src={`${this.props.steptwo1}`} alt=""/>
                </div>
                <div className="twopic2">
                    <img src={`${this.props.steptwo2}`} alt=""/>
                </div>
            </div>
        )
    }
}
class Stepthree extends React.Component {
    render() {
        return (
            <div className="steppic3">
                <div className="stepthree">
                    <img className="step03" src="/index/images/step03.png" alt=""/>
                    <div className="yanfabox">
                        <div className="yanfa">
                            技术研发
                        </div>
                        <ul>
                            <li>炉火上生成的、历史悠久古文化氛围深厚</li>
                            <li>环境中提供沉浸感觉的技术</li>
                            <li>炉火上生成的、历史悠久古文化氛围深厚环境中提供沉浸感觉的技术</li>
                        </ul>
                    </div>
                    <div className="threepic1">
                        <img src={`${this.props.stepthree1}`} alt=""/>
                    </div>
                    <ul className="threeteam">
                        <li>技术支持小组</li>
                        <li>外观工程小组</li>
                        <li>电气自动化小组</li>
                        <li>......</li>
                    </ul>
                </div>
            </div>
        )
    }
}

class Detail extends React.Component {
    render() {

        var Breads = this.props.data.map((v, i) =>
            (<Bread key={i} line={v.line}/>)
        );
        var Rabitts = this.props.content.map((v, i) =>
            (<Rabitt key={i} content={v.content}/>)
        )
        var Designers = this.props.content.map((v, i) =>
            (<Designer key={i} content={v.culture} step1={v.stepone1}/>)
        )
        var Stepones = this.props.content.map((v, i) =>
            (<Stepone key={i} stepone1={v.stepone1} stepone2={v.stepone2}/>)
        )
        var Steptwos = this.props.content.map((v, i) =>
            (<Steptwo key={i} steptwo1={v.steptwo1} steptwo2={v.steptwo2}/>)
        )
        var Stepthrees = this.props.content.map((v, i) =>
            (<Stepthree key={i} stepthree1={v.stepthree1}/>)
        )
        return (
            <div className="bsl_bigbox">
                <div className="bsl_banner">
                    <Common.Nav data={nav}/>
                </div>
                <div className="bsl_conbox">
                    <div className="bsl_xian"></div>
                    <div className="bsl_line">
                        {Breads}
                    </div>
                    <div className="bsl_content">
                        {Rabitts}
                        <div className="bsl_designer">
                            {Designers}
                        </div>
                        <div className="bsl_stepone">
                            {Stepones}
                        </div>
                        <div className="bsl_steptwo">
                            {Steptwos}
                        </div>
                        <div className="bsl_steptwo">
                            {Stepthrees}
                        </div>
                    </div>
                </div>
                <Common.Footer/>
            </div>

        )
    }
}

const data = [
    {line: '首页'},
    {line: '经典铁壶'},
    {line: '作品详情'}
];
const content = [
    {
        content: '古代铁壶—经典复古风格',
        culture: '公司文化:公司以“专注网站,用心服务”为核心价值,一切以用户需求为中心,希望通过专业水平和不懈努力,重塑企业网络形象,为企业产品推广文化发展提供服务指导;塑企业网络形象,为企业产品推广文化发展提供塑企业网络形象,为企业产品推广文化发展提供',
        stepone1:'/index/images/detail-2.png',
        stepone2:'/index/images/detail-3.png',
        steptwo1:'/index/images/detail-4.png',
        steptwo2:'/index/images/detail-5.png',
        stepthree1:'/index/images/detail-6.png',

    }
];
const nav=[
    {title: '最新资讯',href:'/news'},
    {title: '合作加盟',href:'/contact'},
    {title: '铸铁文化',href:'/culture'},
    {title: '经典铁壶',href:'/product'},
    {title: '铁府首页',href:'/'}
];
ReactDOM.render(<Detail data={data} content={content}/>, document.getElementById('bsl_detail'));