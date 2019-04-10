import React, { Component, createRef } from 'react'

class Canvas extends Component {
  ref = createRef()
  componentDidMount() {
    const ctx = this.ref.current.getContext('2d')
    ctx.fillStyle = 'red'
    ctx.fillRect(10, 10, 30, 30)
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // condition
    if(prevProps.xxx !== this.props.xxx) {
      // ....
      // this.setState({})
    }
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }
  render() {
    return <canvas ref={this.ref} />
  }
}

export default Canvas