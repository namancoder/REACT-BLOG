import Post from "./Post";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material/";
const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return posts.map((post) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link to={"/details"} style={{ textDecoration: "none" }}>
        <Post />
      </Link>
    </Grid>
  ));
};

export default Posts;
