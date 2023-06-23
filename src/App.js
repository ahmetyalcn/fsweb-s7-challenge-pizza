import React from "react";
import SiparisFormu from "./components/SiparisFormu";
import SiparisOnayi from "./components/SiparisOnayi";
import Anasayfa from "./components/Anasayfa";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory } from "react-router-dom";


const App = () => {
  const urunler = [
    {
      id: 1,
      adi: "Terminal Pizza",
      puan: 4.9,
      stok: 200,
      fiyat: 60,
      img:"food-1.png"
    },
    {
      id: 2,
      adi: "Position Absolute Acı Pizza",
      puan: 4.9,
      stok: 928,
      fiyat: 85,
      img:"food-2.png"
    },
    {
      id: 3,
      adi: "useeffect Tavuklu Burger",
      puan: 4.9,
      stok: 462,
      fiyat: 75,
      img: "food-3.png"
    },
  ]
  const [siparis, setSiparis] = useState({
    adSoyad: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: ""
  });
  const [donenVeri, setDonenVeri] = useState([])
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSiparis({
      adSoyad: "",
      boyut: "",
      hamur: "",
      malzemeler: [],
      not: ""
    });
   
    axios.post("https://reqres.in/api/users", siparis)
      .then((res) => {
        setDonenVeri(res.data); 
        console.log(donenVeri)

      }).then(() => {
        history.push("/onay");
      })
  }
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Anasayfa urunler={urunler} />
        </Route>
        <Route path="/pizza">
          <SiparisFormu handleSubmit={handleSubmit} siparis={siparis} setSiparis={setSiparis} />
        </Route>
        <Route path="/onay">
          <SiparisOnayi donenVeri={donenVeri} />
        </Route>
        <Route path="*">
          <h1>Fatal Error</h1>
        </Route>
      </Switch>

    </>
  );
};
export default App;