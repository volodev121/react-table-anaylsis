import React, { useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/useTable";
import Input from "../../components/controls/Input";
import { Search } from "@mui/icons-material";
import "./styles.scss";
import CircularProgress from "../../components/controls/circular";
import { createTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "35%",
  },
}));

const headCells = [
  { id: "url", label: "Website Url" },
  { id: "and", label: "AND" },
  { id: "pa", label: "PA" },
  { id: "dr", label: "DR" },
  { id: "niche", label: "Niche" },
  { id: "traffic", label: "Traffic" },
  { id: "keywords", label: "Keywords" },
  { id: "price", label: "Price" },
];

const Category = () => {
  const classes = useStyles();
  const [records, setRecords] = useState([
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 1,
      url: "www.test.com",
      and: "70",
      pa: "49",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 2,
      url: "www.test.com",
      and: "80",
      pa: "59",
      dr: "79",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 3,
      url: "www.test.com",
      and: "40",
      pa: "50",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
    {
      id: 4,
      url: "www.test.com",
      and: "100",
      pa: "33",
      dr: "32",
      niche: "asdwqe",
      traffic: "sdsd",
      keywords: "dsdsd",
      price: "dsdsd",
    },
  ]);
  const [filterFn, setFilterFn] = useState({
    fn: (records) => {
      return records;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (records) => {
        if (target.value == "") return records;
        else
          return records.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Toolbar>
        <Input
          label="Search"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {records.map((item, i) => (
            <TableRow key={item.id} selected={i % 2 === 0 ? true : false}>
              <TableCell width={200}>{item.url}</TableCell>
              <TableCell width={70}>
                <CircularProgress progress={item.and} color="primary" />
              </TableCell>
              <TableCell width={70}>
                <CircularProgress progress={item.pa} color="success" />
              </TableCell>
              <TableCell width={70}>
                <CircularProgress progress={item.dr} color="secondary" />
              </TableCell>
              <TableCell width={500}>{item.niche}</TableCell>
              <TableCell width={150}>{item.traffic}</TableCell>
              <TableCell>{item.keywords}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </div>
  );
};

export default Category;
