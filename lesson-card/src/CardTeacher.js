import React, {Component} from 'react'

const CardTeacher = ({
  data: { name, link, image }
}) => (
  // const { name, link, image } = props.data
    <a href={link}>
      <img className="card__avatar" src={image} />
      <span>{name}</span>
    </a>
  )
// class CardTeacher extends Component {
//   render() {
//     const { name, link, image } = this.props.data
//     return (
//       <a href={link}>
//         <img className="card__avatar" src={image} />
//         <span>{name}</span>
//       </a>
//     )
//   }
// }

export default CardTeacher