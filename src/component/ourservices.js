import react from "react";
import Grid from "@mui/material/Grid";

function Services() {
  return (
    <div style={{ padding: "90px 150px 0 150px" }}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1}>
          <p className="service-line"></p>
        </Grid>
        <Grid item xs={4} md={4}>
          <p className="service-text">Our Services</p>
        </Grid>
        <Grid item xs={7} md={7}>
          <p className="service-para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
