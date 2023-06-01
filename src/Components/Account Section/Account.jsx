import React from 'react'
import './Account.css'
import {BiChevronRight} from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import user from '../../Assets/user.png'

const Account = () => {
  return (
    <div className='Account'>
      <div className="icons flex">
        <BiChevronRight className="icon" />
        <BsThreeDots className="icon" />
      </div>

      <div className="accountDetails">

        <div className="imageDiv">
          <img src={user} alt="account user image" />
          <span className="name">Admin</span>
          <span className="position">Darf / AD</span>
          <button className="btn flex">
            <BiEdit className="icon"/>
            Editar Perfil
          </button>
        </div>

        <div className="hoursDiv">
          <span className="title">Horário do expediente</span>
          <div className="hoursCard flex">

            <div className="right bg">
              <span>Começa</span>
              <h6>08:00</h6>
            </div>

            <div className="left noBg">
              <span>Encerra</span>
              <h6>17:00</h6>
            </div>

          </div>
        </div>
      </div>

        <h1 className="city">Santa Rita do Sapucaí</h1>

    </div>
  )
}

export default Account