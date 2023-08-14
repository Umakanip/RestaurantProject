import React from "react";
import MyImg from "./../component/images/images";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar" style={{ height: "100vh" }}>
      <div>
        <div style={{ position: "relative" }}>
          <img className="lettuce-img" src={MyImg.Lettuce} alt="" />
          <img className="plate-img" src={MyImg.Deliciousfood} alt="" />
          <Grid container spacing={2}>
            <Grid item xs={9} md={9}>
              <img className="logo-img" src={MyImg.Logo} alt="" />
              <ul className="menu-item">
                <li>Menu One</li>
                <li>Menu two</li>
                <li>Menu three</li>
                <li>Menu four</li>
              </ul>
              <Grid container spacing={2}>
                <Grid item xs={8} md={8}>
                  <p className="food-text">Food</p>
                  <p className="unique-food">
                    Discover Restaurant & Delicious Food
                  </p>
                  <div>
                    <div class="input-group" style={{ margin: "0 80px" }}>
                      <div class="form-outline" style={{ width: "65%" }}>
                        <input
                          type="search"
                          id="form1"
                          class="form-control"
                          placeholder="Search restaurant,food"
                        />
                      </div>
                      <button type="button" class="btn btn-primary">
                        Go
                      </button>
                    </div>
                  </div>
                  <div style={{ marginTop: "20%" }}>
                    <p className="indore">
                      <FaMapMarkerAlt />
                      <span style={{ marginLeft: "15px" }}>Indore</span>
                    </p>
                  </div>
                </Grid>
                <Grid item xs={4} md={4}>
                  <img
                    className="dot-img"
                    src={MyImg.Dots}
                    alt=""
                    style={{ width: "270px", margin: "5px 0 0 35px" }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} md={3} style={{ backgroundColor: "#3d7475" }}>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <img className="user-img" src={MyImg.UserPic} alt="" />
                <span className="user-profile">User </span>
                <span>
                  <img
                    className="redcarrot-img"
                    src={MyImg.RedCarrotDown}
                    alt=""
                  />
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
