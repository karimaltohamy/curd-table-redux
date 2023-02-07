import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/actions";

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.data);

  const [userEdit, setUserEdit] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState();
  const { name, email, address, contact } = userEdit;

  // const handleInputChange = (e) => {
  //   let { name, value } = e.target;

  //   setUserEdit({ ...user, [name]: value });
  // };

  const handleEditUser = () => {
    if (!name || !email || !address || !contact) {
      setError("please input all input field ");
    } else {
      dispatch(editUser(userEdit.id, userEdit));
      setError("");
      navigate("/");
    }
  };

  useEffect(() => {
    if (user) {
      setUserEdit(user);
    }
  }, [user]);

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
      <h1>Edit user</h1>

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
          onChange={(e) => setUserEdit({ ...userEdit, name: e.target.value })}
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          type="email"
          onChange={(e) => setUserEdit({ ...userEdit, email: e.target.value })}
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={+contact || ""}
          type="number"
          onChange={(e) =>
            setUserEdit({ ...userEdit, contact: e.target.value })
          }
        />
        <br />
        <TextField
          className="item-input"
          id="standard-basic"
          label="address"
          variant="standard"
          value={address}
          type="text"
          onChange={(e) =>
            setUserEdit({ ...userEdit, address: e.target.value })
          }
        />
        <Button
          style={{ marginTop: "30px", width: "100%" }}
          variant="contained"
          onClick={handleEditUser}
        >
          Edit User
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
