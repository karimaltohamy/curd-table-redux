import axios from "axios";
import * as types from "./actionsType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const addedUser = () => ({
  type: types.ADD_USER,
});

const getSingleUser = (user) => ({
  type: types.GET_USER,
  payload: user,
});

const userEidted = () => ({
  type: types.EDIT_USER,
});

export const loadUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API);
      const data = res.data;
      dispatch(getUsers(data));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API}/${id}`);
      const data = res.data;
      dispatch(userDeleted());
      dispatch(loadUsers());
    } catch (error) {
      console.error(error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API, user);
      const data = res.data;
      dispatch(addedUser());
      dispatch(loadUsers());
    } catch (error) {
      console.error(error);
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
      const data = res.data;
      dispatch(getSingleUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const editUser = (id, user) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API}/${id}`, user);
      const data = res.data;
      dispatch(userEidted());
      dispatch(loadUsers());
    } catch (error) {
      console.error(error);
    }
  };
};
