import React, {Component} from 'react'

import CardTeacher from './CardTeacher'
import CardDesc from './CardDesc'
import './Card.css'

class Card extends Component {
  render() {
    const { title, desc, like, students, price, teacher, video } = this.props.data
    return (
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <CardDesc>{desc}</CardDesc>
        {/* <div className="card__desc">{desc}</div> */}
        <div className="card__stats">
          <div className="card__stat">
            <label>好評</label>
            <div>{like}</div>
          </div>
          <div className="card__stat">
            <label>學生</label>
            <div>{students}</div>
          </div>
          <div className="card__stat">
            <label>價格</label>
            <div>{price}</div>
          </div>
          <div className="card__stat">
            <label>教師</label>
            <CardTeacher data={teacher}/>
          </div>
        </div>
        <video
          className="card__video"
          poster={video.poster}
          src={video.source}
          controls/>
      </div>
    )
  }
}

export default Card