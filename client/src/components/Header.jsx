import { AppBar, Toolbar, Typography } from "@mui/material/";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  component: {
    backgroundColor: "#000000",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography>Home</Typography>
        </Link>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>Login</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
