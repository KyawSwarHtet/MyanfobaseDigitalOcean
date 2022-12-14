import React from "react";
import { Link } from "react-router-dom";
import "../../../travelling/theader.css";
// import "../../../technology/technology.css";
import "../../sportbanner.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Caneballheader() {
  return (
    <section className="container travel">
      <Box sx={{ marginButtom: "10px" }}>
        <Breadcrumbs
          color={"#747474"}
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/" className="link1" fontSize="25px">
            <Typography>Home</Typography>
          </Link>
          <Link to="/sports" className="link1" fontSize="25px">
            <Typography>Sport</Typography>
          </Link>
          <Typography>Caneball</Typography>
        </Breadcrumbs>
      </Box>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={700}
        textTransform="uppercase"
        sx={{ marginTop: "10px" }}
      >
        Caneball
      </Typography>
      <div className="Catabutton">
        <Link to="/football">
          <button className="tec">football</button>
        </Link>
        <Link to="/boxing">
          <button className="tec">boxing</button>
        </Link>
        <Link to="/chess">
          <button className="tec">chess</button>
        </Link>
        <Link to="/cane">
          <button className="tec btnactive">cane ball</button>
        </Link>
        <Link to="/gamming">
          <button className="tec">gamming</button>
        </Link>
      </div>
      <Typography
        variant="body1"
        fontFamily={("Open Sans", "Open Sans Regular", "sans - serif")}
        fontStyle={"italic"}
        align={"justify"}
        sx={{ marginTop: "18px", color: "#777" }}
      >
        Modern technology has become a total phenomenon for civilization, the
        defining force of a new social order in which efficiency is no longer an
        option but a necessity imposed on all human activity.
      </Typography>
    </section>
  );
}


