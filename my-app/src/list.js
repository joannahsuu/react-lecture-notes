import React, {Component} from 'react';
import Item from './item'

// list rendering
class List extends Component {
  state ={
    list: [
      { label: 'name', data: 'John'},
      { label: 'price', data: 320},
      { label: 'videos', data: 6},
      { label: 'teacher', data: 'scars'},
    ]
  }
  // 生命週期
  componentDidMount() {
    fetch('...../api/list')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data
        })
      })
  }
  removeFirst = () => {
    this.setState({
      list: this.state.list.slice(1)
    })
  }
  render() {
    return (
      <ol>
        {this.state.list.map(({label, data}) =>
          (<Item
            key={label}
            text={`${label} : ${data}`} />))}
        <button onClick={this.removeFirst}>-</button>
      </ol>
    )
  }
}

export default List