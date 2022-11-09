import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useData } from "../hooks/useData";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function FinancesTable() {
  const {financialData} = useData()
  return (
    <TableContainer component={Paper} sx={{marginTop:"2rem"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell align="center">Gross income</StyledTableCell>
            <StyledTableCell align="center">Explotation cost</StyledTableCell>
            <StyledTableCell align="center">Ebitda</StyledTableCell>
            <StyledTableCell align="center">Amortization</StyledTableCell>
            <StyledTableCell align="center">Tax</StyledTableCell>
            <StyledTableCell align="center">Net income</StyledTableCell>
            <StyledTableCell align="center">Annual yild</StyledTableCell>
            <StyledTableCell align="center">Accumulated yield</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {financialData.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.year}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.gross_income}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.explotation_cost}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ebitda}</StyledTableCell>
              <StyledTableCell align="center">
                {row.amortization}
              </StyledTableCell>
              <StyledTableCell align="center">{row.tax}</StyledTableCell>
              <StyledTableCell align="center">{row.net_income}</StyledTableCell>
              <StyledTableCell align="center">
                {row.annual_yild}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.accumulated_yield}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
