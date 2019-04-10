import React, {Component} from 'react'

class Child extends Component {
  // state = {
  //   count: 0,
  // }
  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  render() {
    const { count, addParentCount, addChildCount } = this.props
    return (
      <div>
        <h4>Child : {count}</h4>
        {/* <button onClick={this.addCount}>+ 1</button> */}
        <button onClick={addParentCount}> + Parent</button>
        <button onClick={addChildCount}> + Child</button>
      </div>
    )
  }
}

export default Child