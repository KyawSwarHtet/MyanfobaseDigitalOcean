import React from "react";
import { Link } from "react-router-dom";
import "../../../technology/technology.css";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Paintingheader() {
  return (
    <section className="container technology">
      <Box sx={{ marginButtom: "10px" }}>
        <Breadcrumbs
          color={"#747474"}
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link to="/" className="link1" fontSize="25px">
            <Typography>Home</Typography>
          </Link>
          <Link to="/arts" className="link1" fontSize="25px">
            <Typography>arts</Typography>
          </Link>
          <Typography>painting art</Typography>
        </Breadcrumbs>
      </Box>
      <div className="sectop">
        <h1>Arts</h1>
      </div>
      <div className="Catabutton">
        <Link to="/anime">
          <button className="tec">anime art</button>
        </Link>
        <Link to="/sketches">
          <button className="tec">art sketches</button>
        </Link>
        <Link to="/doodle">
          <button className="tec">doodle art</button>
        </Link>
        <Link to="/painting">
          <button className="tec btnactive">painting</button>
        </Link>
      </div>
    </section>
  );
}
