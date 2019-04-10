import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      // <li>hello {this.props.text} {this.props.price + 1}</li>
      <li>{this.props.children}</li> // 取得內部文字
    )
  }
}

export default Item