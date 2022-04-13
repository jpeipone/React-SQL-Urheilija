import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";
import { useNavigate } from "react-router-dom";

const Urheilijantieto = (props) => {
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  let history = useNavigate();
  const [naytaUrheilijantieto, setnaytaUrheilijantieto] = useState(false);
  const onDeleteClick = (id) => {
    YhteystiedotContext.poistaYhteystieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaUrheilijantieto;
    setnaytaUrheilijantieto(lippu);
  };
  const { id, nimi, laji, paino, linkki, syntymavuosi, saavutukset } =
    props.yhteystieto;
  return (
    <div className="card card-body mb-3">
      <h4>
        {nimi}

        <button className="button" onClick={onShowClick.bind(this)}>
          ...
        </button>
      </h4>
      <div class="text-right">
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <button
            className="button_right"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
          <Link to={`puhelintieto/muokkaa/${id}`}>
            <button className="button_right">Muokkaa</button>
          </Link>
        </div>
      </div>
      {naytaUrheilijantieto ? (
        <ul className="list-group">
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Linkki: {linkki}</li>
          <li className="list-group-item">Syntymavuosi: {syntymavuosi}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilijantieto;
