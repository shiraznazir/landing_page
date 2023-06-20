import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

const style = {
  container: {
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: "-1"
  },
  box: {
    width: "50vw",
    height: "50vh",
    paddingLeft: "157px",
    zIndex: "-1"
  },
  innerBox: {
    width: "35vw",
    height: "50vh",
    paddingLeft: "40px",
    zIndex: "-1"
  },
  upperTextBox:{
    position: "absolute",
    top: "40vh",
    left: "13vw",
  }
};

const Header = () => {
  return (
    <Box sx={style.container}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box sx={{ ...style.box, backgroundColor: "#006400" }}>
            <Box sx={{ ...style.innerBox, backgroundColor: "#a8cae9" }}>
              <img width="65%" src={Img1} alt="img1" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              ...style.box,
              backgroundColor: "#f8d1cf",
              paddingLeft: "0px",
            }}
          >
            <Box
              sx={{
                ...style.innerBox,
                paddingLeft: "0px",
                backgroundColor: "#f5b904",
                paddingTop: "10px",
              }}
            >
              <img width="100%" src={Img2} alt="img2" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              ...style.box,
              background: "#e54a3e",
            }}
          >
            <Box
              sx={{
                ...style.innerBox,
                background: "#006400",
                paddingTop: "28px",
              }}
            >
              <img width="88%" src={Img3} alt="img3" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#f84638",
              paddingLeft: "0px",
            }}
          >
            <Box
              sx={{
                ...style.innerBox,
                paddingLeft: "0px",
                background: "#f8d1cf"
              }}
            >
              <img
                width="100%"
                height="100%"
                src={Img4}
                alt="img4"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={style.upperTextBox}>
        <Typography variant="h1" sx={{ fontSize: "85px", fontWeight: "bold", color: "#ffffff", fontFamily: ['Roboto Condensed', "sans-serif"] }} >CUSTOMERS JOURNEY</Typography>
      </Box>
    </Box>
  );
};

export default Header;
