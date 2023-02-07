import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState();
  const { name, email, address, contact } = user;

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleAddUser = () => {
    if (!name || !email || !address || !contact) {
      setError("please input all input field ");
    } else {
      dispatch(addUser(user));
      setError("");
      navigate("/");
    }
  };

  return (
    <div className="adduser-section">
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ marginBottom: "30px" }}
          variant="contained"
          color="error"
          onClick={() => navigate("/")}
        >
          Back Home
        </Button>
      </div>
      <h1>Add user</h1>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ width: "400px", margin: "auto" }}
      >
        <TextField
          className="item-input"
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact}
          type="number"
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="address"
          variant="standard"
          value={address}
          type="text"
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
        <Button
          style={{ marginTop: "30px", width: "100%" }}
          variant="contained"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
