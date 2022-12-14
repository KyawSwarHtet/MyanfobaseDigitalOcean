import React from "react";
import "../../artssbanner.css";
import { Grid } from "@mui/material";

export default function Sketchesbanner() {
  return (
    <section className="container">
      <Grid my={2} container sx={{ margin: "0px" }}>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artphoto">
            <img src="./images/art/art4.jpg" alt="" />;
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="artpara">
            <h1>Women Face on White Background,</h1>
            <div className="datepara">
              <p>
                MARCH - 28, 2019 <br />
                On view at The Met First Avenue <br />
                in Gallery 209
              </p>
            </div>

            <div className="companypara">
              <p>
                Accompained by a catalogue and <br />
                an Audio Guide
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
