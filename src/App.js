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
          <Anasayfa />
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