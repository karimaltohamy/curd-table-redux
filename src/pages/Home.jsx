import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser, loadUsers } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure want to delete this user ?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleEditUser = (id) => {
    dispatch(getUser(id));
    navigate(`/edituser/${id}`);
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="table-container">
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          style={{ marginBottom: "30px" }}
          onClick={() => navigate("/adduser")}
        >
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0
              ? users.map((user) => (
                  <StyledTableRow key={user.id}>
                    <StyledTableCell component="th" scope="row">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.contact}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {user.address}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined button group"
                      >
                        <Button
                          color="primary"
                          style={{ marginRight: "5px" }}
                          onClick={() => handleEditUser(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="error"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Remove
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : "loading"}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
