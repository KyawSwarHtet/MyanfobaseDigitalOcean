import React from "react";
import "./detailbanner.css";
import { Grid } from "@mui/material";
export default function Detailbanner(props) {
  const postDetail = props.postDetail;
  console.log("post detail from banner", postDetail.files);
  return (
    <div className="bannerSection detailcontainer ">
      {/* <h1>This is the detalil page {detailid.id}</h1> */}
      <div className="detailbannerimg">
        <img src={postDetail && postDetail.files[0].filePath} />
      </div>
      <Grid
        container
        my={2}
        sx={{ margin: "2rem 0 0", gap: { sm: "1rem", md: "0.5rem" } }}
      >
        <Grid item xs={1.2} sm={1.2} sx={{ padding: "0px" }}>
          <div className="leftNavicons detailcontainer">
            <i class="fa-solid fa-share-from-square"></i>
            <span className="capitalize navShare">share</span>
            <div className="wrapperNav">
              <div className="buttonNav">
                <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1652877014&extra_1=s|c|318304288219|e|facebook%20login|&placement=&creative=318304288219&keyword=facebook%20login&partner_id=googlesem&extra_2=campaignid%3D1652877014%26adgroupid%3D64176043140%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409285535%26loc_physical_ms%3D1010216%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwlK-WBhDjARIsAO2sErRphRJSzXYXDGUzbLaCPMjdW-VbQrGv7UVs8TNINly-O9lI5AW2HeMaAohSEALw_wcB">
                  <div className="iconNav">
                    <i className="fab fa-facebook-f facebokicon"></i>
                  </div>
                </a>
                <span>F</span>
                <span>a</span>
                <span>c</span>
                <span>e</span>
                <span>b</span>
                <span>o</span>
                <span>o</span>
                <span>k</span>
              </div>
              <div className="buttonNav">
                <a href="www.twitter.com">
                  <div className="iconNav">
                    <i className="fab fa-twitter twittericon"></i>
                  </div>
                </a>
                <span>T</span>
                <span>w</span>
                <span>i</span>
                <span>t</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
              </div>
              <div className="buttonNav">
                <a href="www.email.com">
                  <div className="iconNav">
                    <i class="fa-solid fa-envelope emailicon"></i>
                  </div>
                </a>

                <span>E</span>
                <span>m</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
              </div>
              <div className="buttonNav">
                <a href="www.print.com">
                  <div className="iconNav">
                    <i class="fa-solid fa-print printericon"></i>
                  </div>
                </a>
                <span>P</span>
                <span>r</span>
                <span>i</span>
                <span>n</span>
                <span>t</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={10.5} sm={10.5}>
          <div>
            <p className="firstLetter justify">
              {postDetail && postDetail.description}
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ margin: "auto" }}>
        <Grid item xs="12" sm="6" md="4">
          {postDetail &&
            postDetail.files.length >= 2 &&
            postDetail.files.slice(1, postDetail.files.length).map((data) => {
              return (
                <>
                  <img
                    className="imgbanner"
                    src={data.filePath}
                    alt="detailimage 2"
                  />
                </>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
