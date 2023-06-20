import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableComp from "./TableComp";

const style = {
  accordionSummaryStyle: {
    marginTop: "20px",
    backgroundColor: "#322d2d",
    color: "#ffffff",
  },
  accordionDetailsStyle: {
    backgroundColor: "#201d1d",
    color: "#ffffff",
    marginBotton: "20px",
  },
  expandButton: {
    color: "#ffffff",
  },
};

const AccordinComp = ({ data }) => {
  const { title, details } = data;

  return (
    <>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={style.expandButton} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={style.accordionSummaryStyle}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={style.accordionDetailsStyle}>
            <TableContainer>
              <Table>
                <TableBody>
                    {details?.map((_data, index) => {
                      return <TableComp key={index+1} data={_data} />;
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default AccordinComp;
