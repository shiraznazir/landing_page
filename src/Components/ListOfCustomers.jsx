import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AccordinComp from "./AccordinComp";
import { AccordionData } from "../Data/data";

const style = {
  container: {
    backgroundColor: "#000000",
    color: "#ffffff",
    maxWidth: "100%",
    padding: "50px",
  },
  heading: {
    paddingLeft: "50px",
  },
  accordionConatiner: {
    marginTop: "30px",
  },
};

const ListOfCustomers = () => {

  return (
    <>
      <Box sx={style.container}>
        <Grid container spacing={2} sx={style.heading}>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Image</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Category</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Fabric</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Pattern</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Stretch</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Length</Typography>
          </Grid>
          <Grid item xs={12} md={1.3}>
            <Typography variant="h6">Color</Typography>
          </Grid>
        </Grid>
        <Box sx={style.accordionConatiner}>
          {AccordionData.map((data, index) => {
            return <AccordinComp key={index + 1} data={data} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default ListOfCustomers;
