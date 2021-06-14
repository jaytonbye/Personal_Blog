import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewBlog from "./NewBlog";
import AllBlogs from "./AllBlogs";
import IndividualBlog from "./IndividualBlog";
import EditBlog from "./EditBlog";

const App = (props: AppProps) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AllBlogs />
          </Route>
          <Route exact path="/NewBlog">
            <NewBlog />
          </Route>
          <Route exact path="/:blogid">
            <IndividualBlog />
          </Route>
          <Route exact path="/editblog/:blogid">
            <EditBlog />
          </Route>
          <Route path="*">
            <h1>404 not found error, you probably went to the wrong page...</h1>
            <a href="/allblogs">Go back to the homepage</a>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

interface AppProps {}

export default App;
