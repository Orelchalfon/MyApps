import React, { useState } from "react";
import classes from '../Users/AddUser.module.css'
export default function AddUser(props) {
  const [username, setUsername] = useState("");
  return (
    <form className={classes.input} onSubmit={(e) => e.preventDefault()}>
     
      <label htmlFor="userName" >name</label>
      <input type="text" id="userName"  />


      <label htmlFor="userPass">password</label>
      <input type="password" id="userPass"  />
      <button type="submit">Add User</button>
    </form>
  );
}
