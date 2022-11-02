import React from 'react'
import zuri_logo from '../assets/Zuri.Internship_Logo.png'
import I4G from '../assets/I4G.png'
import '../Footer/footer.scss'

const footer = () => {
  return (
    <div className='footer'>
        <img src={zuri_logo} alt='zuri logo'/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt='I4G'/>

    </div>
  )
}

export default footer