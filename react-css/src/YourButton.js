import React from 'react'
// import style from './YourButton.module.css'
// import './YourButton.scss'
import style from './YourButton.module.scss'

const YourButton = ({children}) => (
  <button className={style.btn}>{children}</button>
)

export default YourButton