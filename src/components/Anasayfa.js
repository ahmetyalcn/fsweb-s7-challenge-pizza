import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Anasayfa.css";
const Anasayfa = ({ urunler }) => {
  return (
    <>
      <div className="main">
        <div className="icerik">
          <img src="./Assets/logo.svg" alt="" />
          <h3>fırsatı kaçırma</h3>
          <p>KOD ACIKTIRIR <br /> PIZZA DOYURUR</p>

          <Link id="order-pizza" className="siparisVer" to="/pizza">ACIKTIM</Link>
        </div>

      </div>



      <Container>
        <section className="navBar">
          <ul>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/1.svg" alt="" /> YENİ Kore</li>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/2.svg" alt="" />Pizza</li>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/3.svg" alt="" />Burger</li>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/4.svg" alt="" />Kızartmalar</li>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/5.svg" alt="" />Fast food</li>
            <li className="filterNav">
              <img src="./Assets/adv-aseets/icons/6.svg" alt="" />Gazlı İçecek</li>
          </ul>
        </section>
      </Container>
      <main>
        <Container>
          <section className="boxes">
            <Row>
              <Col xs="12" lg="6">
                <div class="kutu">
                  <p className="cardTitle">Özel <br />Lezzetus</p>
                  <p><b>Position Absolute Acı Burger</b></p>

                  <Link className="siparisVerCard" to="/pizza">Sipariş Ver</Link>
                </div>
              </Col>
              <Col>
                <div class="kutu2">
                  <p className="cardTitleCard2">Hackathlon <br />Burger Menü</p>

                  <Link className="siparisVerCard" to="/pizza">Sipariş Ver</Link>
                </div>
                <div class="kutu2">
                  <p className="cardTitleCard2"><span>Çoooook  </span>hızlı<br />npm gibi kurye</p>

                  <Link className="siparisVerCard" to="/pizza">Sipariş Ver</Link>
                </div>
              </Col>
            </Row>
          </section>

          <section className="bestMenu">
            <h3>en çok paketlenen menuler</h3>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
            <br />
            <ul>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/1.svg" alt="" /> YENİ Kore</li>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/2.svg" alt="" />Pizza</li>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/3.svg" alt="" />Burger</li>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/4.svg" alt="" />Kızartmalar</li>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/5.svg" alt="" />Fast food</li>
              <li className="filterNav">
                <img src="./Assets/adv-aseets/icons/6.svg" alt="" />Gazlı İçecek</li>
            </ul>
          </section>

          <section className="pizzalar">

            <Row >

              {urunler.map((urun, id) => (
                <Col>
                <Link to="/pizza/:id">
                  <div class="pizzaCard" key={id}>
                    <img src={"./Assets/adv-aseets/" + urun.img} alt="" />
                    <p><b>{urun.adi}</b></p>
                    <div>
                      <span>{urun.puan}</span>
                      <span>({urun.stok})</span>
                      <span><b>{urun.fiyat}₺</b></span>
                    </div>
                  </div>
                  </Link>
                  </Col>
              ))}



                </Row>
      
     
      </section>
        </Container>
      </main>
    </>
  )
}

export default Anasayfa