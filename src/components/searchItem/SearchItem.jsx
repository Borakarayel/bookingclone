import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/426566616.webp?k=f0873299c01b4015879d87e45e1426d2cc703cd3d94a48cea5d5ae285170e3ad&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">The Madrid EDITION</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubTitle">Deluxe King Room with Street View</span>
        <span className="siFeatures">1 king bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSub">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>

          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">€135</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
