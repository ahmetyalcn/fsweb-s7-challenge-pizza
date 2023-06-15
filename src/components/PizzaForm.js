import { Row, Col, Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";
import "./PizzaForm.css";
import { useEffect, useState } from "react";
import * as Yup from "yup";


const malzemeListesi = ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", "Kanada Jambonu", "Mantar", "Ananas", "Tavuk Izgara", "Jalapeno", "Kabak", "Soğan", "Sarımsak"];
const hamurBoyutu = ["S", "M", "L"];
const formSchema = Yup.object().shape({
    boyut: Yup.string().required("Boyut seçimi zorunlu.").nullable(),
    hamur: Yup.string().required("Hamur seçimi zorunlu.").nullable(),
    malzemeler: Yup.array().max(10, 'En fazla 10 seçenek seçebilirsiniz.'),
    adSoyad: Yup.string().min(5, "İsim en az 2 karakter olmalıdır").required(),
    not: Yup.string(),
});

const PizzaForm = ({ handleSubmit, siparis, setSiparis, fiyat, pizzaAdi }) => {


    const [errors, setErrors] = useState({
        adSoyad: "",
        boyut: "",
        hamur: "",
        malzemeler: "",
        not: ""
    });

    const [valid, setValid] = useState(false);
    const [count, setCount] = useState(1);


    useEffect(() => {
        let malzemelerPrice = count * siparis.malzemeler.length * 5;
        setSiparis({
            ...siparis,
            total: ((fiyat + siparis.malzemeler.length * 5) * count).toFixed(2),
            adet: count,
            malzemelerPrice: malzemelerPrice,
            pizzaAdi: pizzaAdi,
        })
    }, [count, siparis.malzemeler])

    const productCounter = (e) => {
        e.preventDefault();
        if (e.target.textContent == "+") {
            setCount(count + 1);
        } else if (count > 1) {
            setCount(count - 1);
        }
    }
    const handleChange = (e) => {
        const { type, checked, value, nodeName, name } = e.target;
        if (type === "radio") {
            setSiparis({
                ...siparis,
                boyut: value
            });
        }
        else if (nodeName === "SELECT") {
            setSiparis({
                ...siparis,
                hamur: value
            });
        }
        else if (type === "checkbox") {
            if (checked) {
                setSiparis({
                    ...siparis,
                    malzemeler: [...siparis.malzemeler, value]
                });
            } else {
                setSiparis({
                    ...siparis,
                    malzemeler: siparis.malzemeler.filter((m) => m !== value)
                });
            }
        } else {
            setSiparis({
                ...siparis,
                [name]: value
            });
        }


        Yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errors,
                    [name]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0]
                });
            });
    }

    useEffect(() => {
      
        Yup.reach(formSchema, "malzemeler")
            .validate(siparis.malzemeler)
            .then(() => {
                setErrors({
                    ...errors,
                    ["malzemeler"]: ""
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    ["malzemeler"]: err.errors[0]
                }); console.log(errors)
            });
    }, [siparis.malzemeler]);






    useEffect(() => {
        formSchema.isValid(siparis).then((vld) => {
            setValid(vld)
        })
    }, [siparis])



    return (
        <Form onSubmit={handleSubmit} id="pizza-form"> 
            <Row xs="2" xl="2">
                <Col>
                    <FormGroup tag="fieldset">
                        <h5>Boyut Seç <span>*</span></h5>

                        {hamurBoyutu.map((eleman, id) => (
                            <FormGroup check key={id} className="radioButtons">
                                <input
                                    className="c-radio-table__radio"
                                    name="boyut"
                                    id={"radio-1-" + id}
                                    type="radio"
                                    onChange={handleChange}
                                    value={eleman}
                                />
                                <label
                                    className="c-radio-table__label c-radio-table__label--white"
                                    htmlFor={"radio-1-" + id}>
                                    {eleman}</label>


                            </FormGroup>
                        ))}
                        <FormFeedback className="d-block">{errors.boyut}</FormFeedback>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <h5>Hamur Seç <span>*</span></h5>
                        <Label check>
                            <Input
                                type="select"
                                className="selectBox"
                                id="size-dropdown"
                                onChange={handleChange}
                                value={siparis.hamur}
                                name="hamur"
                                invalid={!!errors.hamur}>
                                <option value="">-Hamur Kalınlığı Seç-</option>
                                <option value="ince">İnce</option>
                                <option value="normal">Normal</option>
                            </Input>
                        </Label>
                        <FormFeedback className="d-block">{errors.hamur}</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>


            <div className="ekMalzemeler">
                <h5>Ek Malzemeler</h5>
                <p className="description">
                    En fazla 10 malzeme seçebilirsiniz. (5₺)
                </p>
                <FormGroup className="checkboxes">

                    {malzemeListesi.map((malzeme, id) => (
                        <FormGroup className="checkbox" key={id} check>
                            <input
                                type="checkbox"
                                id={"myCheckbox" + id}
                                name="malzemeler"
                                className="myCheckbox"
                                value={malzeme}
                                onChange={handleChange}
                                invalid={!!errors.malzemeler}
                            />

                            <label
                                htmlFor={"myCheckbox" + id}>
                                {malzeme}
                            </label>


                        </FormGroup>

                    ))}
                    <FormFeedback className="d-block">{errors.malzemeler}</FormFeedback>

                </FormGroup>
            </div>
            <FormGroup >
                <h5>Ad Soyad</h5>
                <Label check htmlFor="name-input"></Label>
                <Input
                    className="w-100"
                    id="name-input"
                    name="adSoyad"
                    placeholder="Ad Soyad Giriniz"
                    type="text"
                    onChange={handleChange}
                    value={siparis.adSoyad}
                    invalid={!!errors.adSoyad}
                />
                <FormFeedback className="d-block">{errors.adSoyad}</FormFeedback>
            </FormGroup>
            <br />
            <FormGroup>
                <h5>Sipariş Notu</h5>
                <Label check htmlFor="special-text"></Label>
                <Input
                    className="textarea"
                    id="special-text"
                    name="not"
                    type="textarea"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    onChange={handleChange}
                    value={siparis.not}
                    invalid={!!errors.not}
                />
                <FormFeedback className="d-block">{errors.not}</FormFeedback>
            </FormGroup>
            <br />
            <hr />
            <br />

            <div className="checkout">
                <div className="counter">
                    <button onClick={productCounter}>-</button><div>{count}</div><button onClick={productCounter}>+</button>
                </div>

                <br />
                <div className="siparisOnay">
                    <div className="siparisToplami">
                        <h5>Sipariş Toplamı</h5>
                        <br />
                        <p><b>Seçimler:</b><span>{count * siparis.malzemeler.length * 5} TL</span></p>
                        <p className="toplam"><b>Toplam: </b> <span>{siparis.total}TL</span></p>

                    </div>
                    <Button className="btn btn-warning w-100" id="order-button" disabled={!valid} type="submit">SİPARİŞ VER</Button>
                </div>

            </div>

        </Form>
    )
}


export default PizzaForm