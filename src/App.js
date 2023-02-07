import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="edituser/:id" element={<EditUser />} />
      </Routes>
    </Fragment>
  );
}

export default App;
