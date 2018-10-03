import Grid from "../views/grid";
import Home from "../views/home";
import { fetchPopularRepos } from "../api/user";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    component: Grid,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
  }
];

export default routes;
