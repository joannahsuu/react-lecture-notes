import React, {Component} from 'react';
import Item from './item'

// list rendering

// const steps = [
//   'hello item 1',
//   'hello item 2',
//   'hello item 3',
//   'hello item 4',
// ]

const info = {
  name: 'John',
  price: 3200,
  videos: 60,
  teacher: 'scars',
}

class List extends Component {
  render() {
    return (
      <ol>
        {/* 物件，順序旋染後可能會不一樣 */}
        {Object.keys(info).map( key => {
          const value = info[key]
          console.log('key', key)
          console.log('value', value)
          return (
            <Item>
              {key}:{value}
            </Item>
          )
        })}
        {/* 陣列 */}
        {/* {steps.map((text, idx, array) => <Item>{text}({idx})</Item>)} */}
        {/* <Item text="learn 1" price={100} />
        <Item text="learn 2" price="100"/>
        <Item text="learn 3" /> */}
        {/* <Item>hello item 1</Item>
        <Item>hello item 2</Item>
        <Item>hello item 3</Item>
        <Item>hello item 4</Item> */}
      </ol>
    )
  }
}

export default List