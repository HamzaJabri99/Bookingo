import "./featuredHomes.css";

const featuredHomes = () => {
  return (
    <div className="fhomes">
      <div className="fhomesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/149256418.jpg?k=cec29a0cbd665c0a3163f758c753a2032a7f74bb66a7ebe4e38983d0d63c9f9f&o="
          alt=""
          className="fhomesImg"
        />
        <span className="fhomesCity">france</span>
        <span className="fhomesName">Majestic Apartments Champs</span>
        <span className="fhomesPrice">Starting from $1500</span>
        <div className="fhomesRating">
          <button>8.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fhomesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/46430786.jpg?k=f4fb6f31ab2f9721292a4114a0006d916099d20439c7221cf13f0d6d6e9d0967&o="
          alt=""
          className="fhomesImg"
        />
        <span className="fhomesCity">france</span>
        <span className="fhomesName">Citadines Tour Eiffel Paris</span>
        <span className="fhomesPrice">Starting from $350</span>
        <div className="fhomesRating">
          <button>8.1</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fhomesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/332752606.jpg?k=f3524aedcfc272abf091035bb7f15edaa4534a6950c8914a1835eec9582e0da5&o="
          alt=""
          className="fhomesImg"
        />
        <span className="fhomesCity">france</span>
        <span className="fhomesName">Sweet Inn - Maison Boissière</span>
        <span className="fhomesPrice">Starting from $1700</span>
        <div className="fhomesRating">
          <button>7.6</button>
          <span>good</span>
        </div>
      </div>
      <div className="fhomesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square600/125006668.jpg?k=50f1c2a287fa4f0ef5b27e2406e7fd5084056dad0316490be35268d06a989d3a&o="
          alt=""
          className="fhomesImg"
        />
        <span className="fhomesCity">france</span>
        <span className="fhomesName">Sweet Inn - Monsigny</span>
        <span className="fhomesPrice">Starting from $950</span>
        <div className="fhomesRating">
          <button>7.2</button>
          <span>good</span>
        </div>
      </div>
    </div>
  );
};

export default featuredHomes;
