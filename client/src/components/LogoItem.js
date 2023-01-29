import React from 'react'

const LogoItem = ({logo}) => {
  return (
    <article className="card card-logo" data-aos="fade-up">
      <img src={logo.img} alt={logo.name} className="img-logo"/>
      <div className="card-info">
        <h3 className='logo-name'>{logo.name}</h3>
      </div>
      <div className="card-footer">
      </div>
    </article>
  )
}

export default LogoItem