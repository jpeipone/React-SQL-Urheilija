import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import YhteystiedotContext from "./YhteystiedotContext";
import { GET_YHTEYSTIEDOT } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  //alkutilanne
  let initialState = {
    yhteystiedot: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getYhteystiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3007/urheilijat");
      let { data } = res;
      dispatch({ type: GET_YHTEYSTIEDOT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getYhteystieto = async (id) => {
    try {
      let sql = "http://localhost:3007/urheilijat/" + id;
      let res = await axios.get(sql);
      let { data } = res;
      console.log("GET_YHTEYSTIETO:");
      dispatch({ type: "GET_YHTEYSTIETO", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const setYhteystiedot = async (uusiUrheilija) => {
    try {
      const res = await axios
        .post(`http://localhost:3007/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: "ADD_YHTEYSTIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setYhteystieto = async (id, paivitettyUrheilija) => {
    try {
      const res = await axios
        .put(`http://localhost:3007/urheilijat/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_YHTEYSTIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const poistaYhteystieto = async (id) => {
    try {
      let sql = "http://localhost:3007/urheilijat/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_YHTEYSTIETO", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <YhteystiedotContext.Provider
      value={{
        yhteystiedot: state.yhteystiedot,
        getYhteystiedot,
        setYhteystieto,
        setYhteystiedot,
        poistaYhteystieto,
        getYhteystieto,
      }}
    >
      {props.children}
    </YhteystiedotContext.Provider>
  );
};
export default GlobalState;
