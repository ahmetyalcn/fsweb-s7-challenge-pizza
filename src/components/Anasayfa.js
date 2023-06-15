import { Link } from "react-router-dom";
import "./Anasayfa.css";
const Anasayfa = () => {
  return (
    <div className="main">
      <div className="icerik">
        <img src="./Assets/logo.svg" alt="" />
        <h3>fırsatı kaçırma</h3>
        <p>KOD ACIKTIRIR <br /> PIZZA DOYURUR</p>

        <Link id="order-pizza" className="siparisVer" to="/pizza">ACIKTIM</Link>
      </div>

    </div>
  )
}

export default Anasayfa