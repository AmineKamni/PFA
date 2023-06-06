import React from "react"
import "./style.css"

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">S'identifier</h3>
          <div className="form-group mt-3">
            <label>Adresse e-mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Entrez l'e-mail"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Entrer le mot de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
			Soumettre
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
		  Mot de passe <a href="#">oublié?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
