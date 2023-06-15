import "./SiparisFormu.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PizzaForm from "./PizzaForm";

const SiparisFormu = ({ handleSubmit, siparis, setSiparis }) => {
    let fiyat = 85.50;
    let pizzaAdi = "Position Absolute Aci Pizza"
    return (
        <div>
            <header>
                <img src="./Assets/logo.svg" alt="" />
              
            </header>
           
            <div className="page"> 
            <main>
               <Container>
                <div className="formBanner">
                      <img src="./Assets/adv-aseets/adv-form-banner.png"  alt=""/>
                </div>
              
                    <Row>
                        <Col></Col>
                        <Col xs="12" xl="6" className="pagePath">
                            <p>
                                <Link to="/">Anasayfa</Link>-
                                <a href="secenekler.html">Seçenekler</a>-
                                <Link to="/pizza">Sipariş Oluştur</Link>
                            </p>
                            <br/>
                            <h5 className="pizzaName">
                            {pizzaAdi}
                        </h5>
                        <Row xs="4" xl="4" className="pizzaInfo">
                            <Col><h3>{fiyat.toFixed(2)}₺</h3></Col>
                            <Col></Col>
                            <Col>
                                <span className="rate">4.9</span>
                            </Col>
                            <Col>
                                <span className="stock">(200)</span>
                            </Col>
                        </Row>
                        <p className="description">
                            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çesitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş maymayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                     
                        </Col>
                        <Col></Col>
                    </Row>
                    </Container>
                    </main>

                    <Container>
                <Row>
                    <Col></Col>
                    <Col xs="12" xl="6" className="content">
                      
                        <PizzaForm handleSubmit={handleSubmit} siparis={siparis} setSiparis={setSiparis} fiyat={fiyat} pizzaAdi={pizzaAdi} />


                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </div>
           
        </div>
    )
}

export default SiparisFormu