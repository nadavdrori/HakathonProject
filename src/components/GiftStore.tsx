import ProductContainer from "./ProductContainer";
import arrowDown from "../style/arrow_down.png";
import watch from "../style/watch.png";
import parking from "../style/parking.png";
import gift from "../style/gift.png";
import "../style/GiftStore.css";
let points = 3280;

function GiftStore() {
  return (
    <div className="main">
      <h1 className="gstit">
        <b>Welcome to the Gift Shop!</b>
      </h1>
      <h4 className="avpoints">Avaliable points: {points}</h4>

      <ProductContainer
        title="Free Parking"
        text={"Available parking from... to... at..."}
        price="6500"
        imgsrc={parking}
      ></ProductContainer>
      <ProductContainer
        title="Smart Health watch"
        text={"new watch..."}
        price="3500"
        imgsrc={watch}
      ></ProductContainer>
      <ProductContainer
        title="Gift Card"
        text={"100 ILS gift card to..."}
        price="1000"
        imgsrc={gift}
      ></ProductContainer>
      <center>
        <img className="arrowdown" width={30} src={arrowDown}></img>
      </center>
    </div>
  );
}
export default GiftStore;
