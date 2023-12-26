// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const Appointments = () => {
  const [title, setTitle] = useState('')
  const [appointmentList, setAppointmentList] = useState([])
  const [starredAppointments, setStarredAppointments] = useState([])
  const [date, setDate] = useState('')
  const [isTrue, setIsTrue] = useState(false)

  const onChangeDate = event => {
    const givenDate = event.target.value
    const formatedDate = format(new Date(givenDate), 'dd MMMM yyyy, EEEE')
    setDate(formatedDate)
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onAddAppointment = event => {
    event.preventDefault()
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStar: false,
    }
    setAppointmentList(prev => [...prev, newAppointment])
    setDate('')
    setTitle('')
  }

  const onClickStar = id => {
    setAppointmentList(prev =>
      prev.map(each =>
        each.id === id ? {...each, isStar: !each.isStar} : each,
      ),
    )
  }

  const onClickBtnStarred = () => {
    setIsTrue(prev => !prev)
    const starredItems = appointmentList.filter(each => each.isStar)
    setStarredAppointments(starredItems)
  }

  const starBtnClassName = isTrue ? 'bg-btn' : 'outline-btn'

  const displayAppointment = isTrue ? starredAppointments : appointmentList

  return (
    <div className="container">
      <div className="card">
        <div className="container-img-show-large-device">
          <div className="form-container">
            <h1 className="m-head">Add Appointment</h1>
            <form className="form" onSubmit={onAddAppointment}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="input-title"
                value={title}
                onChange={onChangeTitle}
              />
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                className="data-class"
                onChange={onChangeDate}
                value={date}
              />
              <div>
                <button className="button-add" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="img-cont-large-devices">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image-large"
            />
          </div>
          <hr className="hr-line" />
        </div>
        <hr />
        <div className="bottom-container">
          <h1 className="m-head">Appointments</h1>
          <button
            type="button"
            className={starBtnClassName}
            onClick={onClickBtnStarred}
          >
            Starred
          </button>
        </div>
        <ul className="un-li-container">
          {displayAppointment.map(each => (
            <AppointmentItem
              key={each.id}
              data={each}
              onClickStar={onClickStar}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Appointments
