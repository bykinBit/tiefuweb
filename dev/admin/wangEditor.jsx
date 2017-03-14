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
        <div ref={(el)=>{this.el = el }} style={{height:200}}>
        </div>
        <div onClick={()=>{this.props.save(this.editor.$txt.html())}}  style={{width:'80px',height:'20px',cursor:'pointer',background:'blue',textAlign:'center'}}>修改内容</div>
      </div>
    )
  }
}
exports.WangEditor = WangEditor;
