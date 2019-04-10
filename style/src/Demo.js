import React, {Component} from 'react'
import Cat from './cat_stolen.jpg'
import './style.css'

class Demo extends Component {
  state = {
    visible: true,
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { visible } = this.state
    // const styleObj = { display: visible? 'block' : 'none' }
    const cn = `image ${visible? '' : 'hide'}`
    return (
      <div>
          <h3>Demo</h3>
          <button onClick={this.toggle}>Toggle</button>
          <hr />
          <img className={cn} src={Cat} alt="cat" />
          {/* <img style={styleObj} src={Cat} alt="cat" /> */}
          {/* {visible && <img src={Cat} alt="cat" /> } */}
          {/* {visible ? <img src={Cat} alt="cat" /> : null} */}
      </div>
    )
  }
}

export default Demo