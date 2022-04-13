import React, { Component, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import yhteystiedotContext from "../context/YhteystiedotContext";
const MuokkaaUrheilijantieto = () => {
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const yhteystieto = YhteystiedotContext.getYhteystieto(id).then((res) => {
        setNimi(res.nimi);
        setSyntymavuosi(res.syntymavuosi);
        setPaino(res.paino);
        setLinkki(res.linkki);
        setLaji(res.laji);
        setSaavutukset(res.saavutukset);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyUrheilijantieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
    };

    YhteystiedotContext.setYhteystieto(id, paivitettyUrheilijantieto);
    history("/");
  };
  const onChangeNimi = (e) => {
    setNimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLinkki = (e) => {
    setLinkki(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijan tietoja</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={onChangeNimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Syntymävuosi</label>
            <input
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Linkki</label>
            <input
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki..."
              value={linkki}
              onChange={onChangeLinkki}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Muokkaa urheilijantieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilijantieto;
