import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>E-shop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>À propos de nous</h2>
            <ul>
              <li>Carrières</li>
              <li>Nos magasins</li>
              <li>Nos soins</li>
              <li>Termes & Conditions</li>
              <li>Politique de Confidentialité</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Service client</h2>
            <ul>
              <li>Centre d'aide </li>
              <li>Comment acheter </li>
              <li>Suivre votre commande </li>
              <li>Achats corporatifs et en gros</li>
              <li>Retours et remboursements </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>139 Rue Alla El Fassi, Rabat, Maroc</li>
              <li>Email: e-shop@gmail.com</li>
              <li>Téléphone: +21213765999</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
