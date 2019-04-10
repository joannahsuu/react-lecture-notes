import React, {Component} from 'react'

class CardDesc extends Component {
  state = {
    open: false,
  }
  toggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    const {open} = this.state
    const cn = `card__desc__text ${open? '' : 'less'}`
    return (
      <div className="card__desc">
        <div className={cn}>
        {this.props.children}
        </div>
        <button
          className="card_desc_btn"
          onClick={this.toggle}>{open? 'Less' : 'More'}</button>
      </div>
    )
  }
}

export default CardDesc