import React from "react";
import "../../subcategory/subcategy.css";

const Dressbanner = () => {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/history/dress/dress1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">history</button>
            <h4>How to Mark yourself 'Safe' on Socials Media</h4>
            <p className="leftparaText">
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </article>
        </div>
        <div className="rightBanner">
          <div className="catebanner2">
            <img src="./images/history/dress/dress2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateHistory">History</button>
            <h4>How to Mark yourself 'Safe' on Socials Media</h4>
            <p className="rightparaText">
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Dressbanner;
