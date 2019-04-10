/**
 * 組件裡有什麼
 */

 import React, {Component} from 'react'

// static property
// static method

 class Item extends Component {
   /**
    * 物件
    */
   state = {
     x: 1,
     count: 0
   }
   /**
    * 生命週期函式
    * this 指向當前組件
    */
   constructor() {

   }
   componentDidMount() {}
   componentDidUpdate(prevProps, prevState) {}
   /**
    * 自訂函式
    * this 指向根據呼叫的方式
    */
   getData() {}
   render() {
     return <div></div>
   }
 }