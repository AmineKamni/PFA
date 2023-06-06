import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa-sharp fa-solid fa-phone-volume'></i>
            <label> +21213765999</label>
            <i className='fa-sharp fa-solid fa-at'></i>
            <label> support@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Questions fréquemment posées</label>
            <label>Besoin d'aide?</label>
            <span><i class="fa-solid fa-globe"></i> </span>
            <label>FR</label>
            <span><i class="fa-solid fa-wallet"></i></span>
            <label>MAD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
