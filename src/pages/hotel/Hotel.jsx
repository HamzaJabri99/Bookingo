import "./hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const images = [
    {
      id: 1,
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/336415822.jpg?k=20c274ee0e1862723f805b8dc7677cffd3cc3e6a4939857f41413af76d9c48fd&o=&hp=1",
    },
    {
      id: 2,
      src: "https://cf.bstatic.com/xdata/images/hotel/max500/336418722.jpg?k=70e92e103f0bd036019da9d0af6fd4bd78fdbadf073a514a4c9b095e3fdec254&o=&hp=1",
    },
    {
      id: 3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336418375.jpg?k=47a9d1f136cea4b248de582d3b4d7fbb72f29e5df47121ec420531b0ea71ea25&o=&hp=1",
    },
    {
      id: 4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/336420148.jpg?k=274c5e404ccbff013549aa749661f8dea35204d9d6bc56134508ae40b88eff75&o=&hp=1",
    },
    {
      id: 5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/336419248.jpg?k=e2e1e9ad072bacb030d0a18f74a25b8d327e15f48b60269be0d13c3ae7a064fa&o=&hp=1",
    },
    {
      id: 6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max300/336417087.jpg?k=6233ad5fd979d9257206cf58e9b6ec10d6b56067ed0a23c86630266279c94f81&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Park Lane New York</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {images.map((item) => (
              <div className="hotelImgWrapper" key={item.id}>
                <img
                  src={item.src}
                  alt="hotel images"
                  className="hotelImg"
                ></img>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of New York </h1>
              <p className="hotelDesc">
                Park Lane New York is a deluxe hotel with a European ambiance,
                providing views over Central Park and the New York skyline. It
                is only 2 minutes’ walk from the elegant shops of 5th Avenue and
                the 59th Street N,Q,R underground station. Spacious and bright,
                rooms at Park Lane New York are fitted with oversized windows
                and fine linens. Amenities include flat-screen TVs and access to
                the on-site fitness centre. Enjoy a seasonal menu created by
                Joseph Fontanals at The Park Room Restaurant, or select from a
                wide variety of cocktails at Harry's New York Bar. New York’s
                Museum of Modern Art, Radio City Music Hall, and Rockefeller
                Center, are all within 10 minutes' walk. With the park directly
                in front of the hotel, jogging and recreational activities are
                easily accessible. This is our guests' favourite part of New
                York, according to independent reviews. Couples particularly
                like the location — they rated it 9.7 for a two-person trip.
                Park Lane New York has been welcoming Booking.com guests since 5
                Dec 2007.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property highlights</h1>
              <span>
                Situated in the real heart of New York, this hotel has an
                excellent location score of 9.7
              </span>
              <span>
                Want a great night's sleep? This hotel was highly rated for its
                very comfy beds.
              </span>
              <span> Parking available at the hotel</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
