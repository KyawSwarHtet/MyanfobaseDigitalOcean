import React from "react";
import Advtecbar from "../catepagerightbar/Advtecbar";
import LatestArticle from "../catepagerightbar/LatestArticle";
import PopularNews from "../catepagerightbar/PopularNews";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import BusinLast from "./BusinLast";

export default function BusinRight() {
  return (
    <div className="allrightbar">
      {/* <BusinLast /> */}
      <PopularNews />
      <span className="lastestbottomline "></span>
      <Advtecbar />
      <LatestArticle />
      <span className="lastestbottomline "></span>
      <StaySocial />
      <Subscribeform />
    </div>
  );
}
