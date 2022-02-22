import { makeStyles } from "@material-ui/styles";
import { Box } from "@mui/material/";

const yourPicture =
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const useStyles = makeStyles({
  image: {
    backgroundImage: `url(${yourPicture})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "50vh",
  },
});

function Banner() {
  const classes = useStyles();

  return <Box className={classes.image}></Box>;
}

export default Banner;
