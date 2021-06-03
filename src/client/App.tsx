import * as React from "react";
import { useState, useEffect } from "react";
import Blog from "./Blog";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
  return (
    <>
      <h1>Welcome to Jason's Blog</h1>
      <h2>It's not visually appealing.</h2>
      <h3>He doesn't care!</h3>
      <p>All Blogs</p>
      <p>Admin</p>
      <Blog />
      <Blog />
    </>
  );
};

interface AppProps {}

export default App;
