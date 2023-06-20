import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';

const style = {
  container: {
    backgroundColor: "#000000",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#FF4500",
    width: "30%",
    height: "50px",
  },
  textStyle: {
    padding: "20px",
  },
};

const Footer = () => {
  return (
    <Box sx={style.container}>
      <Box sx={style.header}></Box>
      <Typography sx={style.textStyle} variant="h6">
        Women Section
      </Typography>
      <Typography sx={style.textStyle} variant="h6">
        Men Section
      </Typography>
      <Typography sx={style.textStyle} variant="h6">
        Family Section
      </Typography>
      <Typography sx={style.textStyle} variant="h6">
        High Value Customers Section
      </Typography>
      <Typography sx={style.textStyle} variant="h6">
        1st Time Customers Section
      </Typography>
      <Box>
        <FacebookIcon sx={style.textStyle} fontSize="large" />
        <InstagramIcon sx={style.textStyle} fontSize="large" />
      </Box>
    </Box>
  );
};

export default Footer;
