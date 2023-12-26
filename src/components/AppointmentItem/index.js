// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {data, onClickStar} = props
  const {id, date, title, isStar} = data

  const onClickBtn = () => {
    onClickStar(id)
  }

  const imageStar = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-container">
      <div className="title-image-container">
        <p>{title}</p>
        <button
          type="button"
          data-testid="star"
          className="button-star"
          onClick={onClickBtn}
        >
          <img src={imageStar} alt="star" />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}
export default AppointmentItem
