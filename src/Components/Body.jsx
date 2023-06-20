import {
  Box,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Gmail from "../assets/gmail.png";
import Profile from "../assets/profile.png";
import Phone from "../assets/phone.png";

const style = {
  mainContainer: {
    maxWidth: "100%",
    background: "transparent",
    margin: "0px",
    marginTop: "-5px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "40px",
    paddingLeft: "10px",
  },
  container: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    padding: "40px",
  },
  imageCardStyle: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    margin: "28px",
  },
  box: {
    margin: "10px",
    marginLeft: "30px",
    width: "200px",
    height: "50px",
    color: "#fffff",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
  card: {
    minWidth: 100,
    maxWidth: "100%",
    boxShadow: "40px",
    color: "#fff",
    backgroundColor: "#323030",
    padding: "10px",
  },
};

const Body = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          marginTop: "-330px",
          zIndex: "1000 !important",
          backgroundColor: "transparent",
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 15%, rgba(25,25,25,0) 100%)",
        }}
      ></Box>
      <Box sx={style.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{...style.container, }}>
            <Box sx={style.headText}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: ["Roboto Condensed", "sans-serif"],
                  fontWeight: "bold",
                  opacity: "0.1",
                }}
              >
                JOURNEY
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: ["Roboto Condensed", "sans-serif"],
                  fontWeight: "bold",
                  marginTop: "-38px",
                  marginLeft: "50px",
                }}
              >
                JOURNEY
              </Typography>
            </Box>
            <Stack direction="row">
              <Stack direction="column" spacing={0}>
                <img
                  width="100px"
                  height="100px"
                  alt="instagram"
                  src={Instagram}
                />
                <Box width="100px" height="200px"></Box>
                <img width="100px" height="100px" alt="google" src={Google} style={{ marginTop: "10px" }} />

              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{ paddingLeft: "100px" }}
              >
                <Box width="100px" height="150px"></Box>
                <img width="100px" height="100px" alt="" src={Facebook} />
                <Box width="100px" height="200px"></Box>
                <img width="100px" height="100px" alt="" src={Gmail} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={style.container}>
            <CardMedia
              sx={style.imageCardStyle}
              image={Profile}
              title="green iguana"
            />
            <Typography
              align="center"
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: ["Roboto Condensed", "sans-serif"],
              }}
            >
              ANNETE <br /> SMITH
            </Typography>
            <Box sx={{ ...style.box, backgroundColor: "#d15223" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                New Customers
              </Typography>
            </Box>
            <Box sx={{ ...style.box, backgroundColor: "#d15223" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Section2
              </Typography>
            </Box>
            <Box sx={{ ...style.box, backgroundColor: "#201f1f" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Section3
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ ...style.container, paddingTop: "40px" }}
          >
            <Box sx={style.headText}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: ["Roboto Condensed", "sans-serif"],
                  fontWeight: "bold",
                  opacity: "0.1",
                }}
              >
                ACTIVITY
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: ["Roboto Condensed", "sans-serif"],
                  fontWeight: "bold",
                  marginTop: "-38px",
                  marginLeft: "-50px",
                }}
              >
                ACTIVITY
              </Typography>
            </Box>
            <Stack direction="row" sx={{ marginTop: "-30px" }}>
              <Stack>
                <Card
                  sx={{
                    ...style.card,
                    width: 120,
                    marginTop: "215px",
                    marginLeft: "30px",
                    borderRadius: "10px",
                    paddingRight: "10px"
                  }}
                >
                  <Typography align="center" variant="p">
                    Your item cart
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    ITEM
                  </Typography>
                </Card>
                <Card
                  sx={{
                    ...style.card,
                    marginTop: "260px",
                    width: 150,
                    padding: "5px 20px 5px 20px",
                    marginLeft: "10px",
                    borderRadius: "10px 0 10px 10px",
                  }}
                >
                  <Typography
                    align="right"
                    variant="p"
                    sx={{ marginLeft: "40px" }}
                  >
                    Ordered
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    THIS ITEM
                  </Typography>
                </Card>
              </Stack>
              <Stack align="center" sx={{ marginLeft: "-50px" }}>
                <Card sx={{ ...style.card }}>
                  <Typography align="center" variant="p">
                    LinkedIn Post
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    POST
                  </Typography>
                </Card>
                <Card
                  sx={{
                    ...style.card,
                    marginTop: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    width="200px"
                    height="400px"
                    alt="phoneImg"
                    src={Phone}
                  />
                  <Box
                    sx={{
                      ...style.box,
                      backgroundColor: "#d15223",
                      width: "120px",
                      height: "30px",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography variant="h8" sx={{ fontWeight: "bold" }}>
                      View Post
                    </Typography>
                  </Box>
                </Card>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Body;
