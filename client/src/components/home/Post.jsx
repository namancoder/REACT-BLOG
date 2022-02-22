import { Box, Typography } from "@mui/material/";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    height: 350,
    margin: 10,
    border: 10,
    border: "1px solid #d3cede",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: " 10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
  },
  default: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});
const Post = () => {
  const classes = useStyles();

  const url =
    "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  return (
    <Box className={classes.container}>
      <img src={url} alt='wrapper' className={classes.image} />
      <Typography className={classes.text}>Music</Typography>
      <Typography className={classes.heading}>NG BLOG</Typography>
      <Typography className={classes.text}>Author: Naman Gupta</Typography>
      <Typography className={classes.default}>Hi from Naman</Typography>
    </Box>
  );
};

export default Post;
