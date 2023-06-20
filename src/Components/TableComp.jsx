import { TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const style = {
  textStyle: {
    color: "#ffffff",
  },
};

const TableComp = ({ data }) => {
  const {
    img,
    name,
    category,
    price,
    fabric,
    pattern,
    stretch,
    length,
    color,
  } = data;
  return (
    <TableRow>
      <TableCell>
        <img
          width="50px"
          height="50px"
          alt="img"
          src={img}
          style={{ borderRadius: "10px" }}
        />
      </TableCell>
      <TableCell>
        <Typography variant="p" sx={style.textStyle}>
          {name}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {category}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {price}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {fabric}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {pattern}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {stretch}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {length}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {" "}
        <Typography variant="p" sx={style.textStyle}>
          {color}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default TableComp;
