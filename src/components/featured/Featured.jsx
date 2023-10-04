import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Athens</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Rome</h1>
          <h2>456 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
