import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/579738.webp?k=1bfe325b8ed4316353264edd21a15b96de60a1297aa5166f609bc972707fc183&o="
          alt=""
        />
        <div className="featuredTitle">
          <h1>Marrakech</h1>
          <h2>3,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o="
          alt=""
        />
        <div className="featuredTitle">
          <h1>Paris</h1>
          <h2>7,000 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o=    "
          alt=""
        />
        <div className="featuredTitle">
          <h1>Istanbul</h1>
          <h2>4,200 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
