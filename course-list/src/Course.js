import React, {Component} from 'react'
import style from './Course.module.css'

class Course extends Component {
  render() {
    const { title, subtitle, cover, teachers } = this.props
    return (
      <div className={style.course}>
        <div
          className={style.cover}
          style={{
            backgroundImage: `url('${cover}')`
          }} />
        {/* <img src={cover} style={{ height: 100 }} /> */}
        <div className={style.info}>
          <div className={style.title}>{title}</div>
          {<label>{teachers[0].username}</label>}
        </div>
      </div>
    )
  }
}

export default Course