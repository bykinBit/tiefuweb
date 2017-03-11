const React = require('react');

class Footer extends React.Component {
    render() {
        return (
            <div className="bin_footerbox">
                <div className="bin_footer">
                    <div className="bin_back"></div>
                    <div className="bin_contact">
                        <div className="bin_conleft">
                            <div className="bin_contitlebox">
                                <div className="bin_contitle">
                                    <img src="/index/images/bin_pen.png" alt=""/>
                                    联系我们
                                </div>
                            </div>
                            <div className="bin_name">
                                NAME
                                <img className="bin_conimg" src="/index/images/bin_man.png" alt=""/>
                                <input type="text" className="bin_input"/>
                            </div>
                            <div className="bin_phone bin_name">
                                PHONE
                                <img className="bin_conimg" src="/index/images/bin_iph.png" alt=""/>
                                <input type="text" className="bin_input"/>
                            </div>
                            <div className="bin_message">
                                MESSAGE
                                <img className="bin_conimg" src="/index/images/bin_lt.png" alt=""/>
                                <br/>
                                <input type="text" className="bin_input2"/>
                            </div>
                            <div className="bin_send">
                                SEND
                            </div>
                        </div>
                        <div className="bin_mapbox">
                            <div className="bin_mapcon">
                                <p className="bin_cnmap">太原清华科技园A座</p>
                                <p className="bin_enmap">Taiyuan A tsinghua science park building</p>
                            </div>
                        </div>
                        <div className="bin_conemail">
                            <img src="/index/images/bin_eml.png" alt=""/>
                            <p>EMAIL</p>
                            <span>YANGYANGDEYI@163.com</span>
                        </div>
                        <div className="bin_conemail">
                            <img src="/index/images/bin_eml.png" alt=""/>
                            <p>PHONE</p>
                            <span>400-0351-186</span>
                        </div>
                    </div>
                </div>
                <div className="bin_footerbottom">
                    中国山西省晋城市 晋ICP备12001607号-2 版权所有&copy;2015 晋城市量子文化传媒有限公司
                </div>
            </div>
        )
    }
}

//导航
class Btn extends React.Component {
    render() {
        return (
            <div className="bin_btnline" onClick={() => {
                this.props.click(this.props.index)
            }}>
                <div className={`${this.props.isActive ? 'bin_line' : 'bin_line2'}`}></div>
            </div>
        )
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 4
        };
        this.click = this.click.bind(this);
    }

    click(id) {
        this.setState((ps) => ({index: id}));
    }

    render() {
        const datas = this.props.data;
        const title = datas.map((v, i) =>
            <a className="bin_btn" key={i} href={`${v.href}`}>
                    {v.title}
                <Btn key={i} isActive={i === this.state.index} index={i} click={this.click}>
                </Btn>
            </a>
        );
        return (
            <div className="bin_topbox">
                <div className="bin_top">
                    <img src="/index/images/bin_logo.png" alt=""/>
                    <ul className="bin_btnbox">
                        {title}
                    </ul>
                </div>
            </div>
        )
    }
}
//侧边导航

class Listbtn extends React.Component {
    render() {
        return (
        <a href={`${this.props.href}`}>
            <div className={`${this.props.isLine ? 'bin_classnav2' : 'bin_classnav'}`} onClick={() => {
                this.props.click(this.props.index)
            }}>
                <div className={`${this.props.isActive ? 'bin_backnow' : 'bin_backnow2'}`}></div>
                <div className={`${this.props.isActive ? 'bin_bornow' : 'bin_bornow2'}`}>
                    <p className="bin_pin">{this.props.name}</p>
                    <p className="bin_pin2">
                        <a className={`${this.props.isActive ? 'bin_row' : 'bin_row2'}`}>{this.props.title}</a>SHOW</p>
                </div>
            </div>
        </a>
        )
    }
}

class Sidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.click = this.click.bind(this);
    }

    click(id) {
        this.setState((ps) => ({index: id}))
    };

    render() {
        // 产品分类
        const data = this.props.sidenav;
        const title = data.map((v, i) =>
            <Listbtn key={i} name={v.name} title={v.title} isActive={i === this.state.index} index={i}
                     click={this.click} isLine={i === 4} href={v.href}/>
        );
        // 热门新闻
        const news = this.props.news;
        const newscon = news.map((v, i) =>
            <a href={v.newurl} key={i}>
                <div className="bin_newbox">

                    <img src={v.images} alt=""/>
                    <div className="bin_newtitlebox">
                        {v.title}
                        <img src="/index/images/bin_ntl.png" alt=""/>
                    </div>
                    <p>{v.con}</p>
                    <div className="bin_newtimebox">
                        <div className="bin_newtda"></div>
                        <div className="bin_newtime">{v.time}</div>
                    </div>

                </div>
            </a>
        );
        /////////////////////////////////
        return (
            <div className="bin_sidenavbox">
                <div className="bin_classification">
                    <div className="bin_titlebox">
                        <img src="/index/images/bin_class.png" alt=""/>
                    </div>
                </div>
                <div className="bin_classcon">
                    {title}
                </div>

                <div className="bin_classification">
                    <div className="bin_titlebox">
                        <img src="/index/images/bin_new.png" alt=""/>
                    </div>
                </div>
                {newscon}
            </div>
        )
    }
}
//单页banner
class Detail extends React.Component {
    render() {
        return (
            <div className="bsl_bigbox">
                <div className="bsl_banner"></div>
            </div>

        )
    }
}


exports.Footer = Footer;
exports.Nav = Nav;
exports.Detail = Detail;
exports.Sidenav = Sidenav;