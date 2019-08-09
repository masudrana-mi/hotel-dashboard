import React from "react";

const Container = () => {
  return (
    <div className="container">
      <header className="header">
        <img
          className="logo"
          src={require("../Assets/img/logo.png")}
          alt="trillo logo"
        />
        <form action="#" className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search hotels"
          />
          <button className="search_button">
            <img
              src={require("../Assets/img/SVG/magnifying-glass.svg")}
              alt="search-icon"
            />
          </button>
        </form>
        {/* Header part */}
        <nav className="user-nav">
          <div className="user-nav_icon-box">
            <img
              className="user-nav_icon"
              src={require("../Assets/img/SVG/bookmark.svg")}
              alt="search-icon"
            />
            <span className="user-nav_notification">7</span>
          </div>
          <div className="user-nav_icon-box">
            <img
              src={require("../Assets/img/SVG/chat.svg")}
              alt="search-icon"
            />
            <span className="user-nav_notification">13</span>
          </div>
          <div className="user-nav_user">
            <img
              className="user-nav_photo"
              src={require("../Assets/img/masud.jpg")}
              alt="search-icon"
            />
            <span className="user-nav_user-name">Masud</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav_item side-nav_item-active">
              <a href="#" className="side-nav_link">
                <img
                  className="side-nav_icon"
                  src={require("../Assets/img/SVG/home.svg")}
                  alt="search-icon"
                />
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav_item">
              <a href="#" className="side-nav_link">
                <img
                  className="side-nav_icon"
                  src={require("../Assets/img/SVG/aircraft-take-off.svg")}
                  alt="search-icon"
                />
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav_item">
              <a href="#" className="side-nav_link">
                <img
                  className="side-nav_icon"
                  src={require("../Assets/img/SVG/key.svg")}
                  alt="search-icon"
                />
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav_item">
              <a href="#" className="side-nav_link">
                <img
                  className="side-nav_icon"
                  src={require("../Assets/img/SVG/map.svg")}
                  alt="search-icon"
                />
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">&copy:2017 by trillo, All rights reserved</div>
        </nav>

        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery_item">
              <img
                className="gallery_photo"
                src={require("../Assets/img/hotel-1.jpg")}
                alt="search-icon"
              />
            </figure>
            <figure className="gallery_item">
              <img
                className="gallery_photo"
                src={require("../Assets/img/hotel-2.jpg")}
                alt="search-icon"
              />
            </figure>
            <figure className="gallery_item">
              <img
                className="gallery_photo"
                src={require("../Assets/img/hotel-3.jpg")}
                alt="search-icon"
              />
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview_heading">Hotel Las Palmas</h1>
            <div className="overview_stars">
              {/* <h1>masud</h1> */}
              <img
                className="overview_icon-star"
                src={require("../Assets/img/SVG/star.svg")}
                alt="search-icon"
              />
              <img
                className="overview_icon-star"
                src={require("../Assets/img/SVG/star.svg")}
                alt="search-icon"
              />
              <img
                className="overview_icon-star"
                src={require("../Assets/img/SVG/star.svg")}
                alt="search-icon"
              />
              <img
                className="overview_icon-star"
                src={require("../Assets/img/SVG/star.svg")}
                alt="search-icon"
              />
              <img
                className="overview_icon-star"
                src={require("../Assets/img/SVG/star.svg")}
                alt="search-icon"
              />
            </div>

            <div className="overview_location">
              <img
                className="overview_icon-location"
                src={require("../Assets/img/SVG/location-pin.svg")}
                alt="search-icon"
              />
              <button className="btn-inline">Albufera, Portugal</button>
            </div>

            <div className="overview_rating">
              <div className="overview_rating-average">8.6</div>
              <div className="overview_rating-count">429 votes</div>
            </div>
          </div>

          <div className="details">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="paragraph">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="list">
                <li className="list_item">Close to the beach</li>
                <li className="list_item">Breakfast included</li>
                <li className="list_item">Free airport shuttle</li>
                <li className="list_item">Free wifi in all rooms</li>
                <li className="list_item">Air conditions and heating</li>
                <li className="list_item">Pets allowed</li>
                <li className="list_item">We speak all language</li>
                <li className="list_item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend_count">
                  Lucky and 3 other friends recommend this hotel
                </p>
                <div className="recommend_friends">
                  <img
                    className="recommend_photo"
                    src={require("../Assets/img/user-3.jpg")}
                    alt="search-icon"
                  />
                  <img
                    className="recommend_photo"
                    src={require("../Assets/img/user-4.jpg")}
                    alt="search-icon"
                  />
                  <img
                    className="recommend_photo"
                    src={require("../Assets/img/user-5.jpg")}
                    alt="search-icon"
                  />
                  <img
                    className="recommend_photo"
                    src={require("../Assets/img/user-6.jpg")}
                    alt="search-icon"
                  />
                </div>
              </div>
            </div>

            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review_text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum."
                </blockquote>
                <figcaption className="review_user">
                  <img
                    className="review_photo"
                    src={require("../Assets/img/user-1.jpg")}
                    alt="search-icon"
                  />
                  <div className="review_user-box">
                    <p className="review_user-name">Nick Smith</p>
                    <p className="review_user-date">Feb, 23, 2017</p>
                  </div>
                  <div className="review_rating">7.8</div>
                </figcaption>
              </figure>
              <figure className="review">
                <blockquote className="review_text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum."
                </blockquote>
                <figcaption className="review_user">
                  <img
                    className="review_photo"
                    src={require("../Assets/img/user-2.jpg")}
                    alt="search-icon"
                  />
                  <div className="review_user-box">
                    <p className="review_user-name">Nick Smith</p>
                    <p className="review_user-date">Feb, 23, 2017</p>
                  </div>
                  <div className="review_rating">9.3</div>
                </figcaption>
              </figure>
              <button className="btn-inline">
                Show all <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className="cta">
            <h2 className="cta_book-now">
              Good news! We have 4 free rooms for your selested dates!
            </h2>
            <button className="btn">
              <span className="btn_visible">Book now</span>
              <span className="btn_invisible">Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Container;
