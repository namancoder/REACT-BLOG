import {
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@mui/material/";
import { makeStyles } from "@material-ui/styles";
import { categories } from "../constants/data";
const useStyle = makeStyles({
  create: {
    m: 20,
    background: "#6495ed",
    color: "#fff",
  },
  table: {
    border: "1px solid rgba(224, 224, 224, 1)",
  },
});
const Categories = () => {
  const classes = useStyle();
  return (
    <>
      <Button
        variant='contained'
        sx={{ margin: 2, background: "#6495ed", color: "#fff", width: "86%" }}
      >
        ADD BLOG
      </Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
