import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useReducer, useContext } from "react";
import yhteystiedotContext from "../context/YhteystiedotContext";

export default function LisaaUrheilijantieto() {
  let history = useNavigate();
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const [virheet, setVirheet] = useState({});
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilijantieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log(uusiUrheilijantieto);
    YhteystiedotContext.setYhteystiedot(uusiUrheilijantieto);
    history("/");
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilijantieto</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
              error={virheet.nimi}
            />
            <div className="invalid-feedback">Täytä nimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymavuosi</label>
            <input
              id="syntymavuositieto"
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
              error={virheet.syntymavuosi}
            />
            <div className="invalid-feedback">Täytä Syntymavuosi</div>
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="painotieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
              error={virheet.paino}
            />
            <div className="invalid-feedback">Täytä Paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="linkki">Linkki</label>
            <input
              id="linkkitieto"
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki..."
              value={linkki}
              onChange={(event) => setLinkki(event.target.value)}
              error={virheet.linkki}
            />
            <div className="invalid-feedback">Täytä Linkki</div>
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
              error={virheet.laji}
            />
            <div className="invalid-feedback">Täytä Syntymavuosi</div>
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              id="saavutuksettieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              error={virheet.saavutukset}
            />
            <div className="invalid-feedback">Täytä Syntymavuosi</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilijantieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}
