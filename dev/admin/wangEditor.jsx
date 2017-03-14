const React = require('react');
class WangEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = new wangEditor(this.el);
    this.editor.config.uploadImgUrl = this.props.url;
    this.editor.config.menus = $.map(wangEditor.config.menus, function (item, key) {
      if (item === 'location') {
        return null;
      }
      return item;
    });
    this.editor.create();
    if (this.props.content) {
      this.editor.$txt.html(this.props.content);
    }
  }

  render() {
    return (
      <div>
        <div ref={(el)=>{this.el = el }} style={{height:400}}>
        </div>
        <div onClick={()=>{this.props.save(this.editor.$txt.html())}}  style={{width:'80px',height:'30px',cursor:'pointer',background:'blue'}}>点击获取内容</div>
      </div>
    )
  }
}
exports.WangEditor = WangEditor;
