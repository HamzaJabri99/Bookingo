import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square200/125006668.webp?k=6ea79a6b722525d09b32b27e58b454d4b8f5bd402dce3e6c1fbc5b77de731cba&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire apartment • 2 bedrooms • 1 living room • 1 bathroom •
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$150</span>
          <span className="siTaxOp">Includes Taxes and fees</span>
          <button className="siCheckButton">see availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
