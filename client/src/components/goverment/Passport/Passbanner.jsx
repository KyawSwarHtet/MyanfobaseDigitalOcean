import React from "react";
import "../../subcategory/subcategy.css";

export default function Passbanner() {
  return (
    <>
      <section className="catebannerImg container">
        <div className="leftBanner">
          <div className="catebanner1">
            <img src="./images/government/passport/pass1.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
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
            <img src="./images/government/passport/pass2.jpg" alt="" />
          </div>
          <article className="bannerPara">
            <button className="cateGovernment">Government</button>
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
}
