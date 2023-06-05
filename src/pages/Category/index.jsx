import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";
import Input from "../../components/controls/Input";
import CircularProgress from "../../components/controls/circular";
import SelectFilter from "../../components/controls/filter";
import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "35%",
  },
}));

const rows = [
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
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "url",
    numeric: false,
    disablePadding: true,
    label: "Website Url",
  },
  {
    id: "and",
    numeric: true,
    disablePadding: false,
    label: "AND",
  },
  {
    id: "pa",
    numeric: true,
    disablePadding: false,
    label: "PA",
  },
  {
    id: "dr",
    numeric: true,
    disablePadding: false,
    label: "DR",
  },
  {
    id: "niche",
    numeric: true,
    disablePadding: false,
    label: "Niche",
  },
  {
    id: "traffic",
    numeric: true,
    disablePadding: false,
    label: "Traffic",
  },
  {
    id: "keywords",
    numeric: true,
    disablePadding: false,
    label: "Keywords",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);
  // const [filterFn, setFilterFn] = useState({
  //   fn: (records) => {
  //     return records;
  //   },
  // });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (e) => {
    // let target = e.target;
    // setFilterFn({
    //   fn: (records) => {
    //     if (target.value == "") return records;
    //     else
    //       return records.filter((x) =>
    //         x.fullName.toLowerCase().includes(target.value)
    //       );
    //   },
    // });
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
  const searchNiche = ["erre", "dfwe", "eeee"];
  const searchLinkType = ["testlink1", "testlink2", "testlink3"];
  const searchLanguage = ["Eng", "spa", "turki"];
  const searchSideBar = ["test1", "test2", "test3"];
  const searchSports = ["erre", "dfwe", "eeee"];
  const searchPharm = ["errewwwww", "dfwewwwwwwwwww", "eeeewww"];
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <SelectFilter text="Niche" items={searchNiche}></SelectFilter>
      <SelectFilter text="Link Type" items={searchLinkType}></SelectFilter>
      <SelectFilter text="Language" items={searchLanguage}></SelectFilter>
      <SelectFilter text="Sidebar" items={searchSideBar}></SelectFilter>
      <SelectFilter text="Sports" items={searchSports}></SelectFilter>
      <SelectFilter text="Pharmacy" items={searchPharm}></SelectFilter>
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
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            // numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              // const isItemSelected = isSelected(row.name);
              // const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  // aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={index % 2 === 0 ? true : false}
                  sx={{ cursor: "pointer" }}
                  hover={false}
                >
                  <TableCell align="left" width={200}>
                    {row.url}
                  </TableCell>
                  <TableCell align="left" width={70}>
                    <CircularProgress progress={row.and} color="primary" />
                  </TableCell>
                  <TableCell align="left" width={70}>
                    <CircularProgress progress={row.pa} color="success" />
                  </TableCell>
                  <TableCell align="left" width={70}>
                    <CircularProgress progress={row.dr} color="secondary" />
                  </TableCell>
                  <TableCell align="left" width={500}>
                    {row.niche}
                  </TableCell>
                  <TableCell align="left" width={150}>
                    {row.traffic}
                  </TableCell>
                  <TableCell align="left">{row.keywords}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[30, 40, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
