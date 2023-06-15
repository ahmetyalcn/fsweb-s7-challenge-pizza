import "./SiparisOnayi.css";
import { Row, Col } from "reactstrap";

const SiparisOnayi = ({ donenVeri }) => {
  console.log(donenVeri)
  return (
    <div className="onayMain">
      <Row>
        <Col></Col>
        <Col xs="10" md="8" lg="8" xl="4" >
        <img src="./Assets/logo.svg" alt="" />
            <h3>lezzetin yolda</h3>
            <h1>SİPARİŞ ALINDI</h1>
            <hr className="hr-small" />
            <p className="pizzaAdi"><b>{donenVeri.pizzaAdi}</b></p>
            <br/> <br/>
          <div className="onayContent">
      
          <Row>
           <Col></Col>
           <Col xs="10" md="6" lg="6" xl="6" >
            <p>Boyut: <b>{donenVeri.boyut}</b></p>
            <p>Hamur: <b>{donenVeri.hamur}</b></p>
            <p>Ek Malzemeler:{donenVeri.malzemeler.map((m, id) => {
              return <b key={id}><span>{m}, </span></b>
            })}  </p>
            <br/> <br/>
            <div className="total">
              <strong className="totalTitle">Sipariş Toplamı</strong> 
              <br/> <br/>
            <p><strong>Seçimler: </strong><b>{donenVeri.malzemelerPrice}₺</b></p>
            <p><strong>Toplam:</strong><b> {donenVeri.total}₺</b></p>
            </div>
            <br/> <br/>
           </Col>
           <Col></Col>
          </Row>
            
          </div>
        </Col>
        <Col></Col>
      </Row>





    </div>
  )
}

export default SiparisOnayi