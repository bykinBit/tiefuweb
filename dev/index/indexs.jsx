const React = require('react');
const ReactDOM = require('react-dom');
const path = require('path');
class Classic extends React.Component {
    render() {
        return (
            <div className="classic-jby">
                <div className="classicin-jby">
                    <div className="topbox-jby">
                        <img src="/public/images/1-jby.png" alt=""/>
                    </div>
                    <div className="botbox-jby">
                        <div className="inner-jby">
                            <div className="innertop-jby">
                                <div className="left-jby">
                                    <img src="/public/images/2-jby.png" alt=""/>
                                </div>
                                <div className="right-jby">
                                    <div className="rightintop-jby">
                                        <p className="ritop-jby">铁器／感受坚强的味道</p>
                                        <p className="ribot-jby"> IRONWARE/FEEL THE STRONG FLAVOR</p>
                                    </div>
                                    <div className="rightinbott-jby">
                                        <div className="rightinle-jby">
                                            <img src="/public/images/3-jby.png" alt=""/>
                                        </div>
                                        <div className="rightinri-jby">
                                            <a href="javascript:;" className="btn-jby">&#xe6a1;</a>
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
                                            <img src="/public/images/5-jby.png" alt=""/>
                                        </div>
                                        <div className="btnbox-jby">
                                            <a href="javascript:;" className="btn-jby">&#xe6a1;</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-jby">
                                    <img src="/public/images/6-jby.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Classic/>, document.getElementById('page'));