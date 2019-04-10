import React from 'react'
import styled from 'styled-components'
// import style from './MyButton.module.css'

const Button = styled.button`
  background: yellow;
  border-radius: 20px;
  font-size: 2em;
  width: 250px;
  text-align: center;
  padding: 0.5em 0;
  margin: 0 0.5em;
`

const ButtonText = styled.span`
  color: grey;
`

const MyButton = ({children}) => (
  <Button>
    <ButtonText>{children}</ButtonText>
  </Button>
)

// const MyButton = ({children}) => (
//   <button className={style.btn}>
//     <span className={style['btn-text']}>{children}</span>
//   </button>
// )

export default MyButton