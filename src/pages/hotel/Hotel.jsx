import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../..//components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426566454.jpg?k=9efc051fcaa0e4c68aefff020e1e14220991bd5414e2176eebb8011b30254b5f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426566616.jpg?k=1aa4a289bdb292fd9dcfff4a688e7adc41ed7c91f55bbf7569bc5144b72f50bf&o=&hp=1",
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426566492.jpg?k=787f46dcdfe2cbb38f903af5a8aa716baa914b6053559b39c96904436a49d44f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426566515.jpg?k=48d2961b0865ebcbe74ec7d05c381bcaed756ec46690ccab4316b0ab1b59b9fd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/426566480.jpg?k=1a8307d07c5196dbb3a1ad7c1f5bbf31cd272597fa25f4bf97d5ca67bf99619a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/452952605.jpg?k=a891c6df355ad87661f82d81aac77ed4c8a365785b1dcfc0e18f878828813706&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">The Madrid EDITION</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Plaza de Celenque 2, Madrid City Center, 28013 Madrid, Spain
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location – Subway Access{" "}
          </span>
          <span className="hotelPrice">
            Book a stay over €200 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((eachPhoto, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={eachPhoto.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Madrid</h1>
              <p className="hotelDesc">
                Attractively set in Madrid, The Madrid EDITION has
                air-conditioned rooms, a seasonal outdoor swimming pool, free
                WiFi and a fitness center. Offering a restaurant, the property
                also has a garden, as well as a sauna. The property provides
                room service, a 24-hour front desk and currency exchange for
                guests. At the hotel, rooms have a desk, a TV, a private
                bathroom, bed linen and towels. Each room comes with a safety
                deposit box, while certain rooms come with a terrace and others
                also feature city views. The rooms will provide guests with a
                closet and an electric tea pot. You can play pool at this 5-star
                hotel, and bike rental is available. Popular points of interest
                near The Madrid EDITION include Mercado San Miguel, Plaza Mayor
                and Gran Via. The nearest airport is Adolfo Suarez
                Madrid-Barajas Airport, 8.1 miles from the accommodation. This
                is our guests favorite part of Madrid, according to independent
                reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 4-night stay!</h1>
              <span>
                Located in the heart of Madrid, this hotel has an excellent
                location score of 9.4
              </span>
              <h2>
                <b>€350</b>(4 nights)
              </h2>
              <button>Reserve or Book Now</button>
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
