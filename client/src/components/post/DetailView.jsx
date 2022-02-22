import { Box, Typography } from "@mui/material/";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  container: {
    padding: "0 100px",
  },
  icons: {
    float: "right",
    "& > *": {
      margin: 5,
      border: "1px solid #878787",
      padding: 5,
      borderRadius: 10,
    },
  },

  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
  },
}));
const DetailView = () => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  return (
    <Box className={classes.container}>
      <img src={url} alt='banner' className={classes.image} />

      <Box className={classes.icons}>
        <EditIcon color='primary' />
        <DeleteIcon color='error' />
      </Box>
      <Typography
        style={{
          fontSize: 38,
          fontWeight: 600,
          textAlign: "center",
          margin: "50px 0 10px 0",
        }}
      >
        Title of the blog
      </Typography>
      <Box className={classes.subheading}>
        <Typography>
          Author: <span style={{ fontWeight: "600" }}> Naman Gupta </span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>23 Feb 2022</Typography>
      </Box>
      <Typography>
        THIS IS A BLOG WHICH IS MADE FOR LEARNING PURPOSES. THANK YOU
      </Typography>
    </Box>
  );
};

export default DetailView;
